// test262-dedupe.ts
//
// Removes duplicate test files in js/pass and js/fail that were created when
// full-sync failed to recognize your existing corpus (it deduped by filename,
// so everything got re-added under content-hash names).
//
// Strategy: group all files by their line-ending-normalized content. In any
// group with more than one file, keep one and delete the rest. Files whose
// name is the content hash of their own bytes (i.e. files the sync script
// created) are deleted first; a pre-existing file with any other name is
// always the one kept.
//
// Usage:
//   bun test262-dedupe.ts            # dry run: prints what WOULD be deleted
//   bun test262-dedupe.ts --delete   # actually delete
//
// _FIXTURE files are grouped and deduped the same way.

import { unlink } from "node:fs/promises";
import { join } from "node:path";

const LOG_PREFIX = "[test262:dedupe]";
const doDelete = Bun.argv.includes("--delete");

function contentHash(text: string) {
  return new Bun.CryptoHasher("sha256").update(text).digest("hex").slice(0, 16);
}

function normalizeEol(text: string) {
  return text.replace(/\r\n?/g, "\n");
}

type Entry = {
  path: string;
  name: string;
  selfHashNamed: boolean; // name prefix === hash of its own raw bytes
};

const groups = new Map<string, Entry[]>();
let total = 0;

for (const category of ["pass", "fail"]) {
  const dir = join("js", category);
  const g = new Bun.Glob("*");
  for await (const name of g.scan({ cwd: dir })) {
    const path = join(dir, name);
    let raw: string;
    try {
      raw = await Bun.file(path).text();
    } catch {
      continue;
    }
    total++;
    const key = contentHash(normalizeEol(raw));
    const prefix = name.split(".")[0];
    const entry: Entry = {
      path,
      name,
      selfHashNamed: prefix === contentHash(raw) || prefix === key,
    };
    const list = groups.get(key);
    if (list) list.push(entry);
    else groups.set(key, [entry]);
  }
}

let deleted = 0;
let dupGroups = 0;

for (const [, entries] of groups) {
  if (entries.length < 2) continue;
  dupGroups++;

  // Keep a non-script-named file if one exists (your original corpus),
  // otherwise keep the first script-named one.
  const keeper =
    entries.find((e) => !e.selfHashNamed) ?? entries[0];

  for (const e of entries) {
    if (e === keeper) continue;
    deleted++;
    if (doDelete) {
      await unlink(e.path);
      console.log(`${LOG_PREFIX} deleted ${e.path}`);
    } else {
      console.log(`${LOG_PREFIX} would delete ${e.path} (kept: ${keeper.path})`);
    }
  }
}

console.log(
  `${LOG_PREFIX} ${total} files scanned, ${dupGroups} duplicate group(s), ` +
  `${deleted} file(s) ${doDelete ? "deleted" : "would be deleted (dry run)"}.`,
);
if (!doDelete && deleted > 0) {
  console.log(`${LOG_PREFIX} Re-run with --delete to apply.`);
}

export {};
