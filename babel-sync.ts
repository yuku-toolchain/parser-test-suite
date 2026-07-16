import { classify, type SourceLang } from "./classify";

const REPO = "babel/babel";
const HISTORY_FILE = "babel-sync.md";
const HISTORY_HEADER = "# babel sync history";
const LOG_PREFIX = "[babel]";

const FIXTURES_ROOT = "packages/babel-parser/test/fixtures/";

const TOKEN = process.env.GITHUB_TOKEN;
const headers: Record<string, string> = {
  Accept: "application/vnd.github+json",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function fetchJson(url: string): Promise<any> {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function getRecentCommits(days: number) {
  const since = new Date(Date.now() - days * 86400_000).toISOString();
  const base = `https://api.github.com/repos/${REPO}/commits?since=${since}&per_page=100`;
  const all: any[] = [];
  let page = 1;
  while (true) {
    const batch = await fetchJson(`${base}&page=${page}`);
    if (!batch.length) break;
    all.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return all;
}

async function getCommitFiles(sha: string) {
  const data = await fetchJson(`https://api.github.com/repos/${REPO}/commits/${sha}`);
  return data.files ?? [];
}

async function fetchRaw(path: string) {
  const res = await fetch(`https://raw.githubusercontent.com/${REPO}/main/${path}`);
  if (!res.ok) throw new Error(`${res.status} fetching ${path}`);
  return res.text();
}

function contentHash(code: string) {
  return new Bun.CryptoHasher("sha256").update(code).digest("hex").slice(0, 16);
}

function parseDays() {
  const idx = Bun.argv.indexOf("--days");
  return idx !== -1 ? parseInt(Bun.argv[idx + 1], 10) || 1 : 1;
}

const skipHistory = Bun.argv.includes("--skip-history");

const INPUT_RE = /\/input\.(js|mjs|cjs|jsx|ts|tsx)$/;

function isFixtureInputPath(path: string) {
  if (!path.startsWith(FIXTURES_ROOT)) return false;
  if (!INPUT_RE.test(path)) return false;
  // Flow is a different type syntax; its fixtures are not valid TypeScript/JS.
  if (path.slice(FIXTURES_ROOT.length).startsWith("flow/")) return false;
  return true;
}

// Babel fixture options.json files merge from the fixtures root down to the
// fixture directory, deeper files overriding shallower ones per key.
const optionsCache = new Map<string, Promise<string | null>>();

function fetchOptions(path: string) {
  let cached = optionsCache.get(path);
  if (!cached) {
    cached = fetchRaw(path).catch(() => null);
    optionsCache.set(path, cached);
  }
  return cached;
}

async function resolveOptions(
  inputPath: string
): Promise<{ sourceType?: string; plugins: string[] }> {
  const dirs = inputPath.slice(FIXTURES_ROOT.length).split("/").slice(0, -1);
  let merged: any = {};
  for (let i = 0; i <= dirs.length; i++) {
    const dir = FIXTURES_ROOT + dirs.slice(0, i).join("/");
    const raw = await fetchOptions(`${dir.replace(/\/$/, "")}/options.json`);
    if (!raw) continue;
    try {
      merged = { ...merged, ...JSON.parse(raw) };
    } catch {
      // ignore malformed options.json
    }
  }
  const plugins = (merged.plugins ?? []).map((p: unknown) =>
    Array.isArray(p) ? String(p[0]) : String(p)
  );
  return { sourceType: merged.sourceType, plugins };
}

function dialectOf(path: string, plugins: string[]): SourceLang {
  if (path.endsWith(".d.ts")) return "dts";
  if (path.endsWith(".tsx")) return "tsx";
  if (path.endsWith(".ts")) return "ts";
  if (path.endsWith(".jsx")) return "jsx";
  // .js/.mjs/.cjs inputs: the dialect comes from the fixture's plugins.
  if (plugins.includes("typescript")) return plugins.includes("jsx") ? "tsx" : "ts";
  if (plugins.includes("jsx")) return "jsx";
  return "js";
}

const TARGETS: Record<SourceLang, { suite: string; ext: string }> = {
  js: { suite: "js", ext: ".js" },
  jsx: { suite: "jsx", ext: ".jsx" },
  ts: { suite: "ts", ext: ".ts" },
  tsx: { suite: "ts", ext: ".tsx" },
  dts: { suite: "ts", ext: ".d.ts" },
};

function outputPath(hash: string, folder: string, asModule: boolean, dialect: SourceLang) {
  const { suite, ext } = TARGETS[dialect];
  return `${suite}/${folder}/${hash}${asModule ? ".module" : ""}${ext}`;
}

const days = parseDays();
console.log(`${LOG_PREFIX} Checking last ${days} day(s)...`);

const commits = await getRecentCommits(days);
if (!commits.length) {
  console.log(`${LOG_PREFIX} No commits found.`);
  process.exit(0);
}

const added = new Map<string, string>();
for (const commit of commits) {
  let files: any[];
  try {
    files = await getCommitFiles(commit.sha);
  } catch {
    continue;
  }
  for (const f of files) {
    if (f.status === "added" && isFixtureInputPath(f.filename)) {
      added.set(f.filename, commit.sha);
    }
  }
}

if (!added.size) {
  console.log(`${LOG_PREFIX} No new fixture input files added.`);
  process.exit(0);
}

console.log(`${LOG_PREFIX} Found ${added.size} new file(s).`);

const saved: { filename: string; path: string }[] = [];

for (const [path] of added) {
  try {
    const source = await fetchRaw(path);
    const options = await resolveOptions(path);
    const dialect = dialectOf(path, options.plugins);
    const initialModule =
      path.endsWith(".mjs") ||
      ((dialect === "js" || dialect === "jsx") && options.sourceType === "module");
    const c = classify(source, dialect, initialModule);
    if (c.folder === "skip") {
      console.log(`${LOG_PREFIX}   skip (does not parse): ${path}`);
      continue;
    }
    const target = outputPath(contentHash(source), c.folder, c.asModule, dialect);
    await Bun.write(target, source);
    saved.push({ filename: target, path });
    console.log(`${LOG_PREFIX}   ${c.folder}: ${target} <- ${path}`);
  } catch (e: any) {
    console.log(`${LOG_PREFIX}   skip: ${path} (${e.message})`);
  }
}

if (!skipHistory) {
  const date = new Date().toISOString().slice(0, 10);
  const lines = saved.map(
    (f) => `- [${f.filename}](https://github.com/${REPO}/blob/main/${f.path})`
  );
  const entry = `## ${date}\n\n${lines.join("\n")}\n`;

  const historyFile = Bun.file(HISTORY_FILE);
  const raw = (await historyFile.exists()) ? await historyFile.text() : "";
  const normalized =
    raw.trim() === ""
      ? `${HISTORY_HEADER}\n\n`
      : raw.startsWith(HISTORY_HEADER)
        ? raw
        : `${HISTORY_HEADER}\n\n${raw}`;
  const rest = normalized.slice(HISTORY_HEADER.length).replace(/^\n+/, "");
  await Bun.write(HISTORY_FILE, `${HISTORY_HEADER}\n\n${entry}\n${rest}`);
} else {
  console.log(`${LOG_PREFIX} Skipped history file (--skip-history).`);
}

console.log(`${LOG_PREFIX} Done. ${saved.length} file(s) synced.`);

export {};
