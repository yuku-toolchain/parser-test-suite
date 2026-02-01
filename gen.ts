import { parseSync } from "oxc-parser";
import { join } from "path";
import { Glob } from "bun";
import { rmSync } from "node:fs"

const FOLDERS = ["js/pass"];

// Fields to remove from AST
const FIELDS_TO_REMOVE = [
  "hashbang", "typeAnnotation", "typeParameters", "typeArguments",
  "returnType", "superTypeArguments", "implements", "abstract", "definite",
  "override", "accessibility", "readonly", "importKind", "exportKind", "in",
  "asserts", "out", "const"
];

// Recursively clean AST, and set `value: null` for regex literals
function sanitizeAst(node: any, fieldsToRemove: string[]): any {
  if (node === null || node === undefined) return node;
  if (Array.isArray(node)) return node.map(item => sanitizeAst(item, fieldsToRemove));
  if (typeof node === "object") {
    // Regex literal with a `regex` field
    if (
      node.type === "Literal" &&
      node.hasOwnProperty("regex") &&
      typeof node.regex === "object"
    ) {
      const cleaned: any = {};
      for (const [k, v] of Object.entries(node)) {
        if (!fieldsToRemove.includes(k)) {
          cleaned[k] = (k === "value") ? null : sanitizeAst(v, fieldsToRemove);
        }
      }
      return cleaned;
    }
    // Generic object traversal
    const cleaned: any = {};
    for (const [key, value] of Object.entries(node)) {
      if (!fieldsToRemove.includes(key)) {
        cleaned[key] = sanitizeAst(value, fieldsToRemove);
      }
    }
    return cleaned;
  }
  return node;
}

async function processFile(folderPath: string, fileName: string) {
  const filePath = join(folderPath, fileName);

  try {
    const source = await Bun.file(filePath).text();
    const isModule = fileName.endsWith(".module.js");

    // Parse using correct sourceType
    const result = parseSync(filePath, source, {
      sourceType: isModule ? "module" : "script",
    });
    const output = {
      program: result.program,
      errors: result.errors,
      comments: result.comments,
    };
    let cleaned = sanitizeAst(output, FIELDS_TO_REMOVE);

    // If this is a module file, set program.sourceType = 'module'
    if (isModule && cleaned.program) {
      cleaned = { ...cleaned, program: {...cleaned.program, sourceType: "module"} };
    }

    const outputName = `${fileName.replace('.js', '').replace('.module', '')}.snapshot.json`;
    const outputPath = join(folderPath, "snapshots", outputName);
    await Bun.write(outputPath, JSON.stringify(cleaned, null, 2));
  } catch (error) {
    rmSync(filePath, { force: true });
    console.error(`error processing ${fileName}:`, error);
  }
}

async function processFolder(folderPath: string) {
  try {
    const glob = new Glob("*.js");
    for await (const file of glob.scan(folderPath)) {
      await processFile(folderPath, file);
    }
  } catch (error) {
    console.error(`cannot open ${folderPath}:`, error);
  }
}

async function main() {
  for (const folderPath of FOLDERS) {
    await processFolder(folderPath);
  }
}
main();
