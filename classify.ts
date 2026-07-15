import { parseSync } from "oxc-parser";

export type SourceLang = "js" | "jsx" | "ts" | "tsx" | "dts";
export type Folder = "pass" | "fail" | "semantic" | "skip";

export interface Classification {
  folder: Folder;
  asModule: boolean;
}

type SourceType = "script" | "module";
type OxcError = { message?: string; helpMessage?: string | null; codeframe?: string | null };

// oxc reports these as parse errors, but they are early errors that yuku's
// semantic analysis reports, so the file belongs in semantic/ rather than
// fail/. Grows as new cases are found.
const SEMANTIC_ERROR_MESSAGES = ["A module cannot have multiple default exports."];

// Semantic-looking errors that must stay hard failures, parsed as modules.
const FORCE_FAIL_MODULE_MESSAGES: string[] = [];

// Redeclarations are scope-level early errors yuku always reports.
const REDECLARATION_MESSAGE = "already been declared";

const errorText = (e: OxcError) => `${e.message ?? ""}\n${e.helpMessage ?? ""}\n${e.codeframe ?? ""}`;

const anyMatch = (errors: OxcError[], messages: string[]) =>
  messages.length > 0 && errors.some((e) => messages.some((m) => errorText(e).includes(m)));

interface Verdict {
  folder: "pass" | "fail" | "semantic";
  mode: SourceType;
  /** The errors that produced this verdict. */
  triggers: OxcError[];
  /** The mode to keep when a semantic verdict is demoted back to pass. */
  passMode: SourceType;
}

/**
 * Classifies a source file by parsing it with oxc in both source types.
 *
 * - Parses cleanly (in either mode) -> pass, in a mode where it parses.
 * - Only fails when oxc's semantic checks are enabled, or the error is a
 *   known early error -> semantic.
 * - Fails to parse in both modes -> fail, in the initial mode.
 *
 * A file valid in exactly one mode is kept in that mode, so e.g. module-only
 * syntax found in a script lands as a `.module.` test instead of a failure.
 */
export function classify(source: string, lang: SourceLang, initialModule = false): Classification {
  const filename = `input.${lang === "dts" ? "d.ts" : lang}`;
  const astType = lang === "js" || lang === "jsx" ? "js" : "ts";
  const parse = (sourceType: SourceType, showSemanticErrors: boolean): OxcError[] =>
    parseSync(filename, source, { lang, astType, sourceType, showSemanticErrors }).errors;

  const initial: SourceType = initialModule ? "module" : "script";
  const opposite: SourceType = initialModule ? "script" : "module";
  const verdict = resolve(parse, initial, opposite);

  if (verdict.folder === "semantic" && anyMatch(verdict.triggers, FORCE_FAIL_MODULE_MESSAGES)) {
    return { folder: "fail", asModule: true };
  }

  // yuku only parses TypeScript: it never reports TS-specific errors. Files
  // oxc rejects are untestable (skip), and only the ECMAScript early errors
  // yuku shares with js may assert a semantic failure - anything else lands
  // in pass when some mode is fully clean, otherwise it is skipped.
  if (lang === "ts" || lang === "tsx" || lang === "dts") {
    if (verdict.folder === "fail") {
      return { folder: "skip", asModule: false };
    }
    if (
      verdict.folder === "semantic" &&
      !anyMatch(verdict.triggers, [REDECLARATION_MESSAGE, ...SEMANTIC_ERROR_MESSAGES])
    ) {
      for (const mode of [verdict.passMode, verdict.passMode === initial ? opposite : initial]) {
        if (parse(mode, true).length === 0) {
          return { folder: "pass", asModule: mode === "module" };
        }
      }
      return { folder: "skip", asModule: false };
    }
  }

  return { folder: verdict.folder, asModule: verdict.mode === "module" };
}

function resolve(
  parse: (sourceType: SourceType, showSemanticErrors: boolean) => OxcError[],
  initial: SourceType,
  opposite: SourceType
): Verdict {
  const initialSyntax = parse(initial, false);

  if (initialSyntax.length > 0) {
    if (anyMatch(initialSyntax, [REDECLARATION_MESSAGE])) {
      return { folder: "semantic", mode: initial, triggers: initialSyntax, passMode: initial };
    }

    const oppositeSyntax = parse(opposite, false);
    if (oppositeSyntax.length > 0) {
      const errors = [...initialSyntax, ...oppositeSyntax];
      const semantic = anyMatch(errors, SEMANTIC_ERROR_MESSAGES);
      return { folder: semantic ? "semantic" : "fail", mode: initial, triggers: errors, passMode: initial };
    }

    // Only valid in the opposite mode: keep it there.
    const oppositeFull = parse(opposite, true);
    return oppositeFull.length > 0
      ? { folder: "semantic", mode: opposite, triggers: oppositeFull, passMode: opposite }
      : { folder: "pass", mode: opposite, triggers: [], passMode: opposite };
  }

  const initialFull = parse(initial, true);
  if (initialFull.length > 0) {
    return { folder: "semantic", mode: initial, triggers: initialFull, passMode: initial };
  }

  // Fully valid in the initial mode; if the opposite mode misbehaves, prefer
  // that mode so the file carries a stronger assertion than a plain pass.
  const oppositeSyntax = parse(opposite, false);
  if (oppositeSyntax.length > 0) {
    const semantic = anyMatch(oppositeSyntax, SEMANTIC_ERROR_MESSAGES);
    return { folder: semantic ? "semantic" : "fail", mode: opposite, triggers: oppositeSyntax, passMode: initial };
  }

  const oppositeFull = parse(opposite, true);
  if (oppositeFull.length > 0) {
    return { folder: "semantic", mode: opposite, triggers: oppositeFull, passMode: initial };
  }

  return { folder: "pass", mode: initial, triggers: [], passMode: initial };
}
