// test262-full-sync.ts
//
// One-time (re-runnable) backfill: clones tc39/test262 locally and syncs EVERY
// test file into js/pass | js/fail, skipping anything you already have (by
// content hash). Avoids the GitHub REST API entirely, so no rate limits.
//
// Usage:
//   bun test262-full-sync.ts                        # full sync
//   bun test262-full-sync.ts --only import-attributes  # only paths matching a substring
//   bun test262-full-sync.ts --no-fixtures          # don't copy _FIXTURE dependencies
//   bun test262-full-sync.ts --skip-history         # don't touch test262-sync.md
//   TEST262_DIR=../test262 bun test262-full-sync.ts # reuse an existing clone
//
// Notes:
// - Module tests import sibling files (usually *_FIXTURE.js / *_FIXTURE.json).
//   Since tests are renamed to content hashes, relative specifiers would break,
//   so fixtures are copied next to the test with stable hashed names (keeping
//   the _FIXTURE suffix) and the import specifiers are rewritten to match.
//   Make sure your runner ignores files containing "_FIXTURE".
// - `module` flag => .module.js extension. (Unlike the delta script, onlyStrict
//   is NOT treated as module -- it's a strict-mode directive, not module code.)

import { mkdir } from "node:fs/promises";
import { join, dirname, relative } from "node:path";

const REPO = "tc39/test262";
const CLONE_DIR = ".test262-clone";
const HISTORY_FILE = "test262-sync.md";
const HISTORY_HEADER = "# test262 sync history";
const LOG_PREFIX = "[test262:full]";

const TEST_FOLDERS = [
  "test/annexB/",
  "test/built-ins/",
  "test/intl402/",
  "test/language/",
  "test/staging/",
];

// ---------- CLI ----------
const argv = Bun.argv;
const skipHistory = argv.includes("--skip-history");
const noFixtures = argv.includes("--no-fixtures");
const onlyIdx = argv.indexOf("--only");
const onlyFilter = onlyIdx !== -1 ? argv[onlyIdx + 1] : null;

// ---------- frontmatter helpers ----------
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
  return parseFlags(yaml).includes("module");
}

function contentHash(text: string) {
  return new Bun.CryptoHasher("sha256").update(text).digest("hex").slice(0, 16);
}

// ---------- git helpers ----------
async function run(cmd: string[], quiet = false) {
  const proc = Bun.spawn(cmd, {
    stdout: quiet ? "ignore" : "inherit",
    stderr: "inherit",
  });
  const code = await proc.exited;
  if (code !== 0) throw new Error(`Command failed (${code}): ${cmd.join(" ")}`);
}

async function runCapture(cmd: string[]) {
  const proc = Bun.spawn(cmd, { stdout: "pipe", stderr: "inherit" });
  const out = await new Response(proc.stdout).text();
  if ((await proc.exited) !== 0) throw new Error(`Command failed: ${cmd.join(" ")}`);
  return out.trim();
}

async function ensureRepo(): Promise<string> {
  const envDir = process.env.TEST262_DIR;
  if (envDir) {
    if (await Bun.file(join(envDir, "package.json")).exists()) {
      console.log(`${LOG_PREFIX} Using existing clone at ${envDir}`);
      return envDir;
    }
    throw new Error(`TEST262_DIR=${envDir} doesn't look like a test262 checkout`);
  }
  if (await Bun.file(join(CLONE_DIR, "package.json")).exists()) {
    console.log(`${LOG_PREFIX} Updating clone in ${CLONE_DIR}...`);
    await run(["git", "-C", CLONE_DIR, "fetch", "--depth", "1", "origin", "main"], true);
    await run(["git", "-C", CLONE_DIR, "reset", "--hard", "origin/main"], true);
  } else {
    console.log(`${LOG_PREFIX} Cloning ${REPO} (shallow)...`);
    await run([
      "git", "clone", "--depth", "1", "--single-branch",
      `https://github.com/${REPO}.git`, CLONE_DIR,
    ]);
  }
  return CLONE_DIR;
}

// ---------- fixture handling ----------
// Matches any relative specifier in string literals, e.g. './foo_FIXTURE.js'.
// We only act on ones that resolve to a real sibling file.
const SPECIFIER_RE = /(['"])(\.\/[^'"\n]+)\1/g;

// original absolute path -> materialized filename (stable across cycles)
const fixtureNames = new Map<string, string>();
let fixturesCopied = 0;

async function materializeFixture(
  srcPath: string,
  destDir: string,
  repoRoot: string,
): Promise<string | null> {
  const known = fixtureNames.get(srcPath);
  if (known) return known;

  const file = Bun.file(srcPath);
  if (!(await file.exists())) return null;

  // Name from the repo-relative *path*, not content: deterministic and safe
  // for cyclic module graphs (test262 has cyclic-import tests).
  const rel = relative(repoRoot, srcPath);
  const ext = srcPath.endsWith(".json") ? "_FIXTURE.json" : "_FIXTURE.js";
  const name = `${contentHash(rel)}${ext}`;
  fixtureNames.set(srcPath, name); // register before recursing (cycles)

  let content = await file.text();
  if (!srcPath.endsWith(".json")) {
    content = await rewriteSpecifiers(content, dirname(srcPath), destDir, repoRoot);
  }
  await Bun.write(join(destDir, name), content);
  fixturesCopied++;
  return name;
}

async function rewriteSpecifiers(
  code: string,
  srcDir: string,
  destDir: string,
  repoRoot: string,
): Promise<string> {
  let out = code;
  for (const m of code.matchAll(SPECIFIER_RE)) {
    const spec = m[2]; // './something.js'
    const target = join(srcDir, spec);
    const newName = await materializeFixture(target, destDir, repoRoot);
    if (newName) out = out.split(spec).join(`./${newName}`);
  }
  return out;
}

// ---------- main ----------
await mkdir("js/pass", { recursive: true });
await mkdir("js/fail", { recursive: true });

const repoRoot = await ensureRepo();
const headSha = await runCapture(["git", "-C", repoRoot, "rev-parse", "--short", "HEAD"]);

// Collect hashes we already have, so we only add what's missing.
const existing = new Set<string>();
for (const category of ["pass", "fail"]) {
  const glob = new Bun.Glob("*");
  for await (const name of glob.scan({ cwd: join("js", category) })) {
    existing.add(name.split(".")[0]);
  }
}
console.log(`${LOG_PREFIX} ${existing.size} file(s) already present locally.`);

let scanned = 0;
let added = 0;
let skippedExisting = 0;

const glob = new Bun.Glob("**/*.js");
for (const folder of TEST_FOLDERS) {
  const base = join(repoRoot, folder);
  for await (const relPath of glob.scan({ cwd: base })) {
    const repoRelPath = folder + relPath;
    if (repoRelPath.includes("_FIXTURE")) continue;
    if (onlyFilter && !repoRelPath.includes(onlyFilter)) continue;

    scanned++;
    if (scanned % 5000 === 0) console.log(`${LOG_PREFIX} ...scanned ${scanned}`);

    const srcPath = join(base, relPath);
    let code: string;
    try {
      code = await Bun.file(srcPath).text();
    } catch (e: any) {
      console.log(`${LOG_PREFIX}   skip: ${repoRelPath} (${e.message})`);
      continue;
    }

    const hash = contentHash(code);
    if (existing.has(hash)) {
      skippedExisting++;
      continue;
    }

    const yaml = extractYaml(code) ?? "";
    const category = shouldFail(yaml) ? "fail" : "pass";
    const module = isModule(yaml);
    const destDir = join("js", category);

    let outCode = code;
    if (module && !noFixtures) {
      outCode = await rewriteSpecifiers(code, dirname(srcPath), destDir, repoRoot);
    }

    const ext = module ? ".module.js" : ".js";
    await Bun.write(join(destDir, `${hash}${ext}`), outCode);
    existing.add(hash);
    added++;
  }
}

console.log(
  `${LOG_PREFIX} Done. Scanned ${scanned}, added ${added}, ` +
  `already had ${skippedExisting}, fixtures copied ${fixturesCopied}.`,
);

if (!skipHistory) {
  const date = new Date().toISOString().slice(0, 10);
  const filterNote = onlyFilter ? ` (filter: \`${onlyFilter}\`)` : "";
  const entry =
    `## ${date}\n\n- Full sync from [\`${headSha}\`]` +
    `(https://github.com/${REPO}/tree/${headSha})${filterNote}: ` +
    `${added} test(s) added, ${fixturesCopied} fixture(s) copied.\n`;

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
}

export {};
