import { classify, type SourceLang } from "./classify";

const REPO = "microsoft/TypeScript";
const HISTORY_FILE = "typescript-sync.md";
const HISTORY_HEADER = "# typescript sync history";
const LOG_PREFIX = "[typescript]";

const TEST_FOLDERS = ["tests/cases/compiler/", "tests/cases/conformance/"];

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

function shouldSkipSource(source: string) {
  if (source.includes(".json")) return true;
  if (
    source.includes("@filename") ||
    source.includes("@Filename") ||
    source.includes("@fileName") ||
    source.includes("@FileName")
  ) {
    return true;
  }
  return false;
}

function isTsTestPath(path: string) {
  return path.endsWith(".ts") || path.endsWith(".tsx");
}

function langOf(path: string): SourceLang {
  if (path.endsWith(".d.ts")) return "dts";
  return path.endsWith(".tsx") ? "tsx" : "ts";
}

function outputName(hash: string, isModule: boolean, repoPath: string) {
  const ext = repoPath.endsWith(".d.ts") ? ".d.ts" : repoPath.endsWith(".tsx") ? ".tsx" : ".ts";
  return isModule ? `${hash}.module${ext}` : `${hash}${ext}`;
}

const { mkdir } = await import("node:fs/promises");
await mkdir("ts", { recursive: true });

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
    if (
      f.status === "added" &&
      isTsTestPath(f.filename) &&
      TEST_FOLDERS.some((dir) => f.filename.startsWith(dir))
    ) {
      added.set(f.filename, commit.sha);
    }
  }
}

if (!added.size) {
  console.log(`${LOG_PREFIX} No new .ts/.tsx test files added.`);
  process.exit(0);
}

console.log(`${LOG_PREFIX} Found ${added.size} new file(s).`);

const saved: { filename: string; path: string }[] = [];

for (const [path] of added) {
  try {
    const source = await fetchRaw(path);
    if (shouldSkipSource(source)) {
      console.log(`${LOG_PREFIX}   skip (filtered): ${path}`);
      continue;
    }
    const c = classify(source, langOf(path));
    if (c.folder === "skip" || c.folder === "fail") {
      console.log(`${LOG_PREFIX}   skip (does not parse): ${path}`);
      continue;
    }
    const filename = outputName(contentHash(source), c.asModule, path);
    await Bun.write(`ts/${c.folder}/${filename}`, source);
    saved.push({ filename, path });
    console.log(`${LOG_PREFIX}   ${c.folder}: ${filename} <- ${path}`);
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
