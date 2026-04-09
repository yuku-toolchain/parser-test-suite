const REPO = "tc39/test262";
const HISTORY_FILE = "test262-sync.md";

const TEST_FOLDERS = [
  "test/annexB/",
  "test/built-ins/",
  "test/harness/",
  "test/intl402/",
  "test/language/",
  "test/staging/",
];

const TOKEN = process.env.GITHUB_TOKEN;
const headers: Record<string, string> = {
  Accept: "application/vnd.github+json",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function fetchJson(url: string) {
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

function extractYaml(code: string) {
  const start = code.indexOf("/*---");
  const end = code.indexOf("---*/");
  if (start === -1 || end === -1) return null;
  return code.slice(start + 5, end);
}

function parseNegativePhase(yaml: string) {
  return yaml.match(/negative:\s*\n\s+phase:\s*(\w+)/)?.[1] ?? null;
}

function parseFlags(yaml: string) {
  const match = yaml.match(/flags:\s*\[([^\]]*)\]/);
  return match ? match[1].split(",").map((s) => s.trim()) : [];
}

function shouldFail(yaml: string) {
  const phase = parseNegativePhase(yaml);
  return phase === "parse" || phase === "early";
}

function isModule(yaml: string) {
  const flags = parseFlags(yaml);
  return flags.includes("module") || flags.includes("onlyStrict");
}

function contentHash(code: string) {
  return new Bun.CryptoHasher("sha256").update(code).digest("hex").slice(0, 12);
}

function parseDays() {
  const idx = Bun.argv.indexOf("--days");
  return idx !== -1 ? parseInt(Bun.argv[idx + 1], 10) || 1 : 1;
}

const { mkdir } = await import("node:fs/promises");
await mkdir("js/pass", { recursive: true });
await mkdir("js/fail", { recursive: true });

const days = parseDays();
console.log(`Checking last ${days} day(s)...`);

const commits = await getRecentCommits(days);
if (!commits.length) {
  console.log("No commits found.");
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
      f.filename.endsWith(".js") &&
      TEST_FOLDERS.some((dir: string) => f.filename.startsWith(dir))
    ) {
      added.set(f.filename, commit.sha);
    }
  }
}

if (!added.size) {
  console.log("No new .js test files added.");
  process.exit(0);
}

console.log(`Found ${added.size} new file(s).`);

const saved: { filename: string; path: string }[] = [];

for (const [path] of added) {
  try {
    const code = await fetchRaw(path);
    const yaml = extractYaml(code) ?? "";
    const category = shouldFail(yaml) ? "fail" : "pass";
    const ext = isModule(yaml) ? ".module.js" : ".js";
    const hash = contentHash(code);
    const filename = `${hash}${ext}`;
    await Bun.write(`js/${category}/${filename}`, code);
    saved.push({ filename, path });
    console.log(`  ${category}: ${filename} <- ${path}`);
  } catch (e: any) {
    console.log(`  skip: ${path} (${e.message})`);
  }
}

const date = new Date().toISOString().slice(0, 10);
const lines = saved.map(
  (f) => `- [${f.filename}](https://github.com/${REPO}/blob/main/${f.path})`
);
const entry = `\n## ${date}\n\n${lines.join("\n")}\n`;

const historyFile = Bun.file(HISTORY_FILE);
const existing = (await historyFile.exists()) ? await historyFile.text() : "# test262 sync history\n";
await Bun.write(HISTORY_FILE, existing + entry);

console.log(`Done. ${saved.length} file(s) synced.`);

export {}
