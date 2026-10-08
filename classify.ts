import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { parseSync, type ErrorLabel, type OxcError, type ParserOptions, type Program } from "oxc-parser"

export type SourceLang = NonNullable<ParserOptions["lang"]>
export type Folder = "pass" | "fail" | "semantic" | "skip"

export interface Classification {
  folder: Folder
  asModule: boolean
}

type SourceType = "script" | "module"

interface ParseOutcome {
  errors: OxcError[]
  program: Program
}

type Parse = (sourceType: SourceType, showSemanticErrors: boolean) => ParseOutcome

interface Verdict {
  folder: "pass" | "fail" | "semantic"
  mode: SourceType
  triggers: OxcError[]
}

// oxc reports these at parse time but yuku defers them to semantic analysis
const SEMANTIC_ERROR_MESSAGES = [
  "A module cannot have multiple default exports.",
  "Unexpected new.target expression",
  "Unexpected import.meta expression",
  "Private fields cannot be accessed on super",
  "Statements are not allowed in ambient contexts.",
  "A 'default' clause cannot appear more than once in a 'switch' statement.",
]

// oxc rejects these in both modes but yuku only errors in module code
const FORCE_FAIL_MODULE_MESSAGES = ["Cannot use `await` as an identifier in an async context"]

// these errors only exist under strict mode so the test must be a module
const STRICT_ONLY_MESSAGES = ["octal literals and octal escape sequences are deprecated"]

const REDECLARATION_MESSAGE = "already been declared"

const errorText = (error: OxcError) =>
  `${error.message}\n${error.helpMessage ?? ""}\n${error.codeframe ?? ""}`

const anyMatch = (errors: OxcError[], messages: string[]) =>
  errors.some((error) => messages.some((message) => errorText(error).includes(message)))

const allMatch = (errors: OxcError[], messages: string[]) =>
  errors.length > 0 && errors.every((error) => messages.some((message) => errorText(error).includes(message)))

// duplicate class members are a TypeScript checker rule that yuku never
// reports, unlike duplicate private names and constructors which are
// ECMAScript early errors, so only plain member keys filter
const FILTERED_MEMBER_TYPES = new Set([
  "PropertyDefinition",
  "MethodDefinition",
  "AccessorProperty",
  "TSAbstractPropertyDefinition",
  "TSAbstractMethodDefinition",
])

interface Span {
  start: number
  end: number
}

function memberKeyRanges(node: unknown, ranges: Span[] = []): Span[] {
  if (Array.isArray(node)) {
    for (const item of node) memberKeyRanges(item, ranges)
  } else if (node && typeof node === "object") {
    const { type, kind, key, ...rest } = node as Record<string, unknown> & { key?: Span & { type: string } }
    if (typeof type === "string" && FILTERED_MEMBER_TYPES.has(type) && key && key.type !== "PrivateIdentifier" && kind !== "constructor") {
      ranges.push({ start: key.start, end: key.end })
    }
    for (const value of [key, ...Object.values(rest)]) memberKeyRanges(value, ranges)
  }
  return ranges
}

function dropMemberRedeclarations(errors: OxcError[], program: Program): OxcError[] {
  const isRedeclaration = (error: OxcError) => errorText(error).includes(REDECLARATION_MESSAGE)
  if (!errors.some(isRedeclaration)) return errors

  const ranges = memberKeyRanges(program)
  const inMemberKey = (label: ErrorLabel) =>
    ranges.some((range) => label.start >= range.start && label.end <= range.end)
  return errors.filter(
    (error) => !(isRedeclaration(error) && error.labels.length > 0 && error.labels.every(inMemberKey))
  )
}

// tsc reports a conflict between bindings at every binding involved, which
// oxc misses for ambient declarations, namespace bodies, and class merges.
// a conflict with a class member is also reported at the member, or once
// for an implicit one like prototype, and is a checker rule yuku never reports
const TSC_CONFLICT_CODES = new Set([2300, 2451, 2567, 2813, 2814])

// tsc reports these at exported names that cannot be shared, never at members
const TSC_EXPORT_CONFLICT_CODES = new Set([2323, 2484])

const TSC = join(import.meta.dir, "node_modules", "typescript", "bin", "tsc")

const TSC_OPTIONS = [
  "--ignoreConfig",
  "--noEmit",
  "--noResolve",
  "--lib",
  "es5",
  "--jsx",
  "preserve",
  "--moduleDetection",
  "force",
  "--pretty",
  "false",
]

const NAMED_DECLARATION_TYPES = new Set([
  "FunctionDeclaration",
  "TSDeclareFunction",
  "ClassDeclaration",
  "TSInterfaceDeclaration",
  "TSTypeAliasDeclaration",
  "TSEnumDeclaration",
  "TSModuleDeclaration",
  "TSImportEqualsDeclaration",
])

const IMPORT_SPECIFIER_TYPES = new Set(["ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"])

const EXPORTED_NAME_TYPES = new Set(["ExportSpecifier", "ExportAllDeclaration"])

const IDENTIFIER = /[\p{ID_Continue}$\u200c\u200d]*/uy

type Node = Record<string, unknown> & { type?: string; start: number }

function patternBindingStarts(pattern: Node | null | undefined, starts: Set<number>) {
  if (!pattern) return
  if (pattern.type === "Identifier") starts.add(pattern.start)
  else if (pattern.type === "ObjectPattern") {
    for (const property of pattern.properties as Node[]) {
      patternBindingStarts((property.value ?? property.argument) as Node, starts)
    }
  } else if (pattern.type === "ArrayPattern") {
    for (const element of pattern.elements as (Node | null)[]) patternBindingStarts(element, starts)
  } else if (pattern.type === "AssignmentPattern") patternBindingStarts(pattern.left as Node, starts)
  else if (pattern.type === "RestElement") patternBindingStarts(pattern.argument as Node, starts)
}

// yuku checks the exported names of a module, not those of a namespace
function nameStarts(node: unknown, starts = new Set<number>(), inNamespace = false): Set<number> {
  if (Array.isArray(node)) {
    for (const item of node) nameStarts(item, starts, inNamespace)
  } else if (node && typeof node === "object") {
    const { type, id, local, exported } = node as Node & { id?: Node; local?: Node; exported?: Node }
    if (typeof type === "string") {
      if (NAMED_DECLARATION_TYPES.has(type) && id?.type === "Identifier") starts.add(id.start)
      else if (type === "VariableDeclarator") patternBindingStarts(id, starts)
      else if (IMPORT_SPECIFIER_TYPES.has(type) && local) starts.add(local.start)
      else if (EXPORTED_NAME_TYPES.has(type) && exported && !inNamespace) starts.add(exported.start)
    }
    const nested = inNamespace || type === "TSModuleDeclaration"
    for (const value of Object.values(node)) nameStarts(value, starts, nested)
  }
  return starts
}

function lineStarts(source: string): number[] {
  const starts = [0]
  for (let index = 0; index < source.length; index++) {
    const char = source[index]
    if (char === "\r" && source[index + 1] === "\n") index++
    if (char === "\n" || char === "\r" || char === "\u2028" || char === "\u2029") starts.push(index + 1)
  }
  return starts
}

function tscReportsConflict(source: string, filename: string, program: Program): boolean {
  const dir = mkdtempSync(join(tmpdir(), "classify-"))
  try {
    writeFileSync(join(dir, filename), source)
    const run = Bun.spawnSync([process.execPath, TSC, ...TSC_OPTIONS, filename], { cwd: dir })
    // tsc exits with 1 or 2 when it reports errors
    if (![0, 1, 2].includes(run.exitCode ?? -1)) throw new Error(`tsc failed: ${run.stderr}`)
    const lines = lineStarts(source)
    const names = nameStarts(program)
    const reports = new Map<string, { named: number; others: number }>()
    for (const line of run.stdout.toString().split("\n")) {
      if (!line.startsWith(`${filename}(`)) continue
      const match = /^[^(]*\((\d+),(\d+)\): error TS(\d+):/.exec(line)
      if (!match) continue
      const code = Number(match[3])
      const offset = lines[Number(match[1]) - 1] + Number(match[2]) - 1
      if (TSC_EXPORT_CONFLICT_CODES.has(code) && names.has(offset)) return true
      if (!TSC_CONFLICT_CODES.has(code)) continue
      IDENTIFIER.lastIndex = offset
      const name = IDENTIFIER.exec(source)![0]
      const count = reports.get(name) ?? { named: 0, others: 0 }
      if (names.has(offset)) count.named++
      else count.others++
      reports.set(name, count)
    }
    return [...reports.values()].some((count) => count.named >= 2 && count.others === 0)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

// TS specific forms like export = are legal in scripts and must not count
const ES_MODULE_NODE_TYPES = new Set([
  "ImportDeclaration",
  "ExportNamedDeclaration",
  "ExportDefaultDeclaration",
  "ExportAllDeclaration",
])

const hasEsModuleNodes = (program: Program) => program.body.some((node) => ES_MODULE_NODE_TYPES.has(node.type))

export function classify(source: string, lang: SourceLang, initialModule = false): Classification {
  const filename = `input.${lang === "dts" ? "d.ts" : lang}`
  const isTs = lang === "ts" || lang === "tsx" || lang === "dts"

  const parse: Parse = (sourceType, showSemanticErrors) => {
    const result = parseSync(filename, source, { lang, astType: isTs ? "ts" : "js", sourceType, showSemanticErrors })
    const errors = isTs ? dropMemberRedeclarations(result.errors, result.program) : result.errors
    return { errors, program: result.program }
  }

  const initial: SourceType = initialModule ? "module" : "script"
  const opposite: SourceType = initialModule ? "script" : "module"

  const { triggers, ...verdict } = resolve(parse, initial, opposite)
  let { folder, mode } = verdict

  if (folder !== "pass" && anyMatch(triggers, FORCE_FAIL_MODULE_MESSAGES)) {
    folder = "fail"
    mode = "module"
  }

  // yuku only parses TypeScript so files oxc cannot parse are untestable
  if (isTs && folder === "fail") return { folder: "skip", asModule: false }

  if (folder === "semantic" && mode === "script" && allMatch(triggers, STRICT_ONLY_MESSAGES)) {
    mode = "module"
  }

  // yuku rejects ES module declarations outside modules even where oxc
  // parses TypeScript scripts without complaint
  if (
    folder === "pass" &&
    mode === "script" &&
    hasEsModuleNodes(parse("script", false).program) &&
    parse("module", true).errors.length === 0
  ) {
    mode = "module"
  }

  if (isTs && folder === "pass" && tscReportsConflict(source, filename, parse(mode, false).program)) {
    folder = "semantic"
  }

  return { folder, asModule: mode === "module" }
}

function resolve(parse: Parse, initial: SourceType, opposite: SourceType): Verdict {
  const initialSyntax = parse(initial, false).errors

  if (initialSyntax.length > 0) {
    if (anyMatch(initialSyntax, [REDECLARATION_MESSAGE])) {
      return { folder: "semantic", mode: initial, triggers: initialSyntax }
    }

    const oppositeSyntax = parse(opposite, false).errors
    if (oppositeSyntax.length > 0) {
      const triggers = [...initialSyntax, ...oppositeSyntax]
      return { folder: anyMatch(triggers, SEMANTIC_ERROR_MESSAGES) ? "semantic" : "fail", mode: initial, triggers }
    }

    // valid in the opposite mode, but known semantic errors are a stronger
    // test asserted in the initial mode
    if (anyMatch(initialSyntax, SEMANTIC_ERROR_MESSAGES)) {
      return { folder: "semantic", mode: initial, triggers: initialSyntax }
    }

    const oppositeFull = parse(opposite, true).errors
    return oppositeFull.length > 0
      ? { folder: "semantic", mode: opposite, triggers: oppositeFull }
      : { folder: "pass", mode: opposite, triggers: [] }
  }

  const initialFull = parse(initial, true).errors
  if (initialFull.length > 0) {
    return { folder: "semantic", mode: initial, triggers: initialFull }
  }

  // fully valid in the initial mode, so a misbehaving opposite mode is a
  // stronger assertion than a plain pass
  const oppositeSyntax = parse(opposite, false).errors
  if (oppositeSyntax.length > 0) {
    return { folder: anyMatch(oppositeSyntax, SEMANTIC_ERROR_MESSAGES) ? "semantic" : "fail", mode: opposite, triggers: oppositeSyntax }
  }

  const oppositeFull = parse(opposite, true).errors
  if (oppositeFull.length > 0) {
    return { folder: "semantic", mode: opposite, triggers: oppositeFull }
  }

  return { folder: "pass", mode: initial, triggers: [] }
}
