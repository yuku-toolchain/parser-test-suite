import { parseSync, type ParserOptions } from "oxc-parser";
import { join } from "path";
import { Glob } from "bun";
import { rmSync } from "fs";

type Lang = ParserOptions["lang"];
type AstType = ParserOptions["astType"];

type FolderConfig = {
  path: string;
  failPath?: string;
};

const FOLDERS: FolderConfig[] = [
  { path: "js/pass", failPath: "js/fail" },
  { path: "jsx/pass", failPath: "jsx/fail" },
  { path: "ts/pass" },
];

function detectLang(fileName: string): Lang {
  if (fileName.endsWith(".d.ts")) return "dts";
  if (fileName.endsWith(".tsx")) return "tsx";
  if (fileName.endsWith(".ts")) return "ts";
  if (fileName.endsWith(".jsx")) return "jsx";
  return "js";
}

function detectAstType(lang: Lang): AstType {
  return lang === "ts" || lang === "tsx" || lang === "dts" ? "ts" : "js";
}

// Workaround for an oxc-parser bug: the `value` of HTML-style
// line comments is computed by always stripping a fixed 2 leading chars, so the
// `<!--` (4-char) and `-->` (3-char) markers leak into the value
// (`<!--a` -> "--a", `-->` -> ">", `<!--` -> "--").
// Track upstream: https://github.com/oxc-project/oxc/issues/22803
function fixHtmlCommentValues<T extends { type: string; start: number; end: number; value: string }>(
  comments: T[],
  source: string,
): T[] {
  for (const comment of comments) {
    if (comment.type !== "Line") continue;
    const text = source.slice(comment.start, comment.end);
    if (text.startsWith("<!--")) comment.value = text.slice(4);
    else if (text.startsWith("-->")) comment.value = text.slice(3);
  }
  return comments;
}

async function processFile(folder: FolderConfig, fileName: string, lang: Lang, astType: AstType) {
  const filePath = join(folder.path, fileName);

  const outputName = `${fileName.slice(0, fileName.indexOf("."))}.snapshot.json`;
  const outputPath = join(folder.path, "snapshots", outputName);

  if (await Bun.file(outputPath).exists()) {
    return;
  }

  try {
    const source = await Bun.file(filePath).text();
    const isModule = fileName.includes(".module.");
    const result = parseSync(filePath, source, {
      sourceType: isModule ? "module" : "script",
      lang,
      astType,
      preserveParens: true
    });

    if (result.errors.length > 0) {
      if (folder.failPath) {
        const failPath = join(folder.failPath, fileName);
        await Bun.write(failPath, source);
      } else {
        console.error(`dropped ${filePath}: ${result.errors[0]?.message}`);
      }
      rmSync(filePath, { force: true });
      return;
    }

    const output = {
      program: { ...result.program, start: 0 },
      comments: fixHtmlCommentValues(result.comments, source),
      diagnostics: [],
    };

    const serialized = JSON.stringify(
      output,
      // JSON can't represent bigints, regexps, or non-finite numbers natively
      // So we tag them with a prefix to preserve them in snapshots
      (_, value) => {
        if (typeof value === "bigint") {
          return `(BigInt) ${value}n`;
        }
        if (value instanceof RegExp) {
          return `(RegExp) ${value.toString()}`;
        }
        if (typeof value === "number" && !Number.isFinite(value)) {
          return `(Number) ${value}`;
        }
        // oxc-parser emits non-standard `attributes`/`selfClosing` on
        // JSXOpeningFragment in .jsx mode.
        if (value && typeof value === "object" && value.type === "JSXOpeningFragment") {
          const { attributes: _, selfClosing: __, ...rest } = value;
          return rest;
        }
        // Workaround for an oxc-parser bug: a decorated rest parameter's
        // `RestElement` starts after its own decorators, so the decorators fall
        // outside the range of the node that owns them. TypeScript,
        // typescript-estree and SWC all span them, as does oxc's own
        // `AssignmentPattern`.
        // Track upstream: https://github.com/oxc-project/oxc/issues/26011
        if (value && typeof value === "object" && value.type === "RestElement") {
          const first = value.decorators?.[0]?.start;
          if (typeof first === "number" && first < value.start) {
            return { ...value, start: first };
          }
        }
        return value;
      },
      2
    );

    if (Buffer.byteLength(serialized, "utf8") > 100 * 1024 * 1024) {
      rmSync(outputPath, { force: true });
      rmSync(filePath, { force: true });
      console.error(`skipped ${filePath}: snapshot exceeds 100MB`);
      return;
    }

    await Bun.write(outputPath, serialized);
  } catch (error) {
    rmSync(outputPath, { force: true });

    console.error(`error processing ${filePath}:`, error);
  }
}
async function processFolder(folder: FolderConfig) {
  try {
    const glob = new Glob("*.{js,jsx,ts,tsx}");
    for await (const file of glob.scan(folder.path)) {
      const lang = detectLang(file);
      const astType = detectAstType(lang);
      await processFile(folder, file, lang, astType);
    }
  } catch (error) {
    console.error(`cannot open ${folder.path}:`, error);
  }
}
async function main() {
  for (const folder of FOLDERS) {
    await processFolder(folder);
  }
}
main();
