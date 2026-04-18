import { parseSync, ParserOptions } from "oxc-parser";
import { join } from "path";
import { Glob } from "bun";
import { rmSync } from "fs";

type Lang = ParserOptions["lang"];
type AstType = ParserOptions["astType"];

type FolderConfig = {
  path: string;
  failPath?: string;
  allowFailures?: boolean;
};

const FOLDERS: FolderConfig[] = [
  { path: "js/pass", failPath: "js/fail" },
  { path: "jsx/pass", failPath: "jsx/fail" },
  { path: "ts/pass", failPath: "ts/fail", allowFailures: true },
];

function detectLang(fileName: string): Lang {
  if (fileName.endsWith(".tsx")) return "tsx";
  if (fileName.endsWith(".ts")) return "ts";
  if (fileName.endsWith(".jsx")) return "jsx";
  return "js";
}

function detectAstType(lang: Lang): AstType {
  return lang === "ts" || lang === "tsx" ? "ts" : "js";
}

async function processFile(folder: FolderConfig, fileName: string, lang: Lang, astType: AstType) {
  const filePath = join(folder.path, fileName);

  const outputName = `${fileName.replace(/\.(module\.)?(j|t)sx?$/, '')}.snapshot.json`;
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

    if (result.errors.length > 0 && !folder.allowFailures) {
      throw new Error(`parse errors:\n${result.errors.map((e) => `  ${e.message}`).join("\n")}`);
    }

    if (result.errors.length > 0 && result.program.body.length === 0) {
      if (folder.failPath) {
        const failPath = join(folder.failPath, fileName);
        await Bun.write(failPath, source);
        rmSync(filePath, { force: true });
      }
      return;
    }

    const output = {
      program: { ...result.program, start: 0 },
      comments: result.comments,
      diagnostics: [],
    };

    const serialized = JSON.stringify(
      output,
      // JSON can't represent bigints or regexps natively
      // So we tag them with a prefix to preserve them in snapshots
      (_, value) => {
        if (typeof value === "bigint") {
          return `(BigInt) ${value}n`;
        }
        if (value instanceof RegExp) {
          return `(RegExp) ${value.toString()}`;
        }
        // oxc-parser emits non-standard `attributes`/`selfClosing` on
        // JSXOpeningFragment in .jsx mode.
        if (value && typeof value === "object" && value.type === "JSXOpeningFragment") {
          const { attributes: _, selfClosing: __, ...rest } = value;
          return rest;
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
