import { parseSync, ParserOptions } from "oxc-parser";
import { join } from "path";
import { Glob } from "bun";
import { rmSync } from "fs";

type Lang = ParserOptions["lang"];
type AstType = ParserOptions["astType"];

type FolderConfig = { path: string; allowFailures?: boolean };

const FOLDERS: FolderConfig[] = [
  { path: "js/pass" },
  { path: "jsx/pass" },
  { path: "ts/pass", allowFailures: true },
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

async function processFile(folderPath: string, fileName: string, lang: Lang, astType: AstType, allowFailures: boolean) {
  const filePath = join(folderPath, fileName);

  const outputName = `${fileName.replace(/\.(module\.)?(j|t)sx?$/, '')}.snapshot.json`;
  const outputPath = join(folderPath, "snapshots", outputName);

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

    if (result.errors.length > 0 && !allowFailures) {
      throw new Error(`parse errors:\n${result.errors.map((e) => `  ${e.message}`).join("\n")}`);
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
      await processFile(folder.path, file, lang, astType, !!folder.allowFailures);
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
