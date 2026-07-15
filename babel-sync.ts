import ts from "typescript";

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

type Dialect = "js" | "jsx" | "ts" | "tsx" | "dts";

function dialectOf(path: string, plugins: string[]): Dialect {
  if (path.endsWith(".d.ts")) return "dts";
  if (path.endsWith(".tsx")) return "tsx";
  if (path.endsWith(".ts")) return "ts";
  if (path.endsWith(".jsx")) return "jsx";
  // .js/.mjs/.cjs inputs: the dialect comes from the fixture's plugins.
  if (plugins.includes("typescript")) return plugins.includes("jsx") ? "tsx" : "ts";
  if (plugins.includes("jsx")) return "jsx";
  return "js";
}

const SCRIPT_KINDS: Record<Dialect, ts.ScriptKind> = {
  js: ts.ScriptKind.JS,
  jsx: ts.ScriptKind.JSX,
  ts: ts.ScriptKind.TS,
  tsx: ts.ScriptKind.TSX,
  dts: ts.ScriptKind.TS,
};

function hasSyntacticErrors(
  sourceFile: ts.SourceFile,
  fileName: string,
  source: string,
  compilerOptions: ts.CompilerOptions
): boolean {
  const host = ts.createCompilerHost(compilerOptions, true);
  const origGetSourceFile = host.getSourceFile.bind(host);
  host.getSourceFile = (name, languageVersion, onError, shouldCreateNewSourceFile) => {
    if (name === fileName) return sourceFile;
    return origGetSourceFile(name, languageVersion, onError, shouldCreateNewSourceFile);
  };
  host.readFile = (name) => (name === fileName ? source : undefined);
  host.fileExists = (name) => name === fileName;

  const program = ts.createProgram([fileName], compilerOptions, host);
  return program.getSyntacticDiagnostics(sourceFile).length > 0;
}

type ClassifyResult =
  | { kind: "fail" }
  | { kind: "pass"; asModule: boolean };

function classify(
  source: string,
  inputPath: string,
  dialect: Dialect,
  optSourceType: string | undefined
): ClassifyResult {
  // tsc's parser needs a matching extension to pick declaration/tsx handling;
  // babel dialects come from plugins, so parse under a normalized name.
  const ext = dialect === "dts" ? ".d.ts" : `.${dialect === "tsx" ? "tsx" : dialect}`;
  const fileName = inputPath.replace(INPUT_RE, `/input${ext}`);
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    SCRIPT_KINDS[dialect]
  );

  const isStrict = sourceFile.statements.some(
    (s) =>
      ts.isExpressionStatement(s) &&
      ts.isStringLiteral(s.expression) &&
      s.expression.text === "use strict"
  );
  const isModule =
    inputPath.endsWith(".mjs") ||
    (dialect === "js" || dialect === "jsx" ? optSourceType === "module" : false) ||
    ts.isExternalModule(sourceFile);
  const asModule = inputPath.endsWith(".cjs") ? false : isModule || isStrict;

  const jsxDialect = dialect === "jsx" || dialect === "tsx";
  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.Latest,
    module: isModule ? ts.ModuleKind.ESNext : ts.ModuleKind.None,
    noResolve: true,
    noLib: true,
    allowJs: true,
    jsx: jsxDialect ? ts.JsxEmit.Preserve : undefined,
  };

  if (hasSyntacticErrors(sourceFile, fileName, source, compilerOptions)) {
    return { kind: "fail" };
  }

  return { kind: "pass", asModule };
}

const TARGETS: Record<Dialect, { dir: string; ext: string }> = {
  js: { dir: "js/pass", ext: ".js" },
  jsx: { dir: "jsx/pass", ext: ".jsx" },
  ts: { dir: "ts/pass", ext: ".ts" },
  tsx: { dir: "ts/pass", ext: ".tsx" },
  dts: { dir: "ts/pass", ext: ".d.ts" },
};

function outputPath(hash: string, asModule: boolean, dialect: Dialect) {
  const { dir, ext } = TARGETS[dialect];
  return `${dir}/${hash}${asModule ? ".module" : ""}${ext}`;
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
    const c = classify(source, path, dialect, options.sourceType);
    if (c.kind === "fail") {
      console.log(`${LOG_PREFIX}   skip (syntactic errors): ${path}`);
      continue;
    }
    const target = outputPath(contentHash(source), c.asModule, dialect);
    await Bun.write(target, source);
    saved.push({ filename: target, path });
    console.log(`${LOG_PREFIX}   pass: ${target} <- ${path}`);
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
