import { parseSync, ParserOptions } from "oxc-parser";
import { join } from "path";
import { Glob } from "bun";
import { rmSync } from "node:fs"

type Lang = ParserOptions["lang"];
type AstType = ParserOptions["astType"];

type FolderConfig = { path: string; lang: Lang; astType: AstType };

const FOLDERS: FolderConfig[] = [
  { path: "js/pass", lang: "js", astType: "js" },
  { path: "jsx/pass", lang: "jsx", astType: "js" },
];

async function processFile(folderPath: string, fileName: string, lang: Lang, astType: AstType) {
  const filePath = join(folderPath, fileName);

  try {
    const source = await Bun.file(filePath).text();
    const isModule = fileName.includes(".module.js");
    const result = parseSync(filePath, source, {
      sourceType: isModule ? "module" : "script",
      lang,
      astType,
      preserveParens: true
    });
    const output = {
      program: result.program,
      errors: result.errors,
      comments: result.comments,
    };

    const outputName = `${fileName.replace('.js', '').replace('.module', '')}.snapshot.json`;
    const outputPath = join(folderPath, "snapshots", outputName);
    await Bun.write(
      outputPath,
      JSON.stringify(
        output,
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
      )
    );
  } catch (error) {
    rmSync(filePath, {
      force: true
    })
    console.error(`error processing ${fileName}:`, error);
  }
}
async function processFolder(folder: FolderConfig) {
  try {
    const glob = new Glob(`*.${folder.lang}`);
    for await (const file of glob.scan(folder.path)) {
      await processFile(folder.path, file, folder.lang, folder.astType);
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
