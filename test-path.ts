import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const NAME_LENGTH = 16;

const TEST_DIRS = ["js", "jsx", "ts"].flatMap((suite) =>
  ["pass", "fail", "semantic"].map((folder) => `${suite}/${folder}`)
);

// name -> paths of the test files holding it, across every suite and folder
let taken: Map<string, string[]> | undefined;

function takenNames() {
  if (taken) return taken;
  taken = new Map();
  for (const dir of TEST_DIRS) {
    if (!existsSync(dir)) continue;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isFile()) continue;
      const name = entry.name.slice(0, entry.name.indexOf("."));
      taken.set(name, [...(taken.get(name) ?? []), join(dir, entry.name)]);
    }
  }
  return taken;
}

// A test file is named by the first 16-char window of the SHA-256 of its
// source that no other test file holds, so names stay unique across suites
// and no two tests share a snapshot (the same source can be a test in more
// than one mode). Returns null when the same source already sits at that
// path, i.e. the test is already in the suite.
export function testPath(source: string, dir: string, suffix: string): string | null {
  const names = takenNames();
  const hash = new Bun.CryptoHasher("sha256").update(source).digest("hex");
  for (let i = 0; i + NAME_LENGTH <= hash.length; i++) {
    const name = hash.slice(i, i + NAME_LENGTH);
    const path = join(dir, `${name}${suffix}`);
    const holders = names.get(name);
    if (!holders) {
      names.set(name, [path]);
      return path;
    }
    if (holders.includes(path) && readFileSync(path, "utf8") === source) return null;
  }
  throw new Error(`no free name for ${join(dir, `*${suffix}`)}`);
}
