# parser-test-suite

Comprehensive ECMAScript parser test suite targeting [ESTree](https://github.com/estree/estree) / [TypeScript-ESTree](https://typescript-eslint.io/packages/typescript-estree/) AST. Used to test [yuku-parser](https://github.com/yuku-toolchain/yuku).

## Layout

| Suite | pass   | fail  | semantic |
| ----- | ------ | ----- | -------- |
| `js`  | 37,459 | 3,634 | 3,615    |
| `jsx` | 55     | 14    |          |
| `ts`  | 8,083  |       | 176      |

**Total: ~53,000 tests**, sourced from [tc39/test262](https://github.com/tc39/test262), [microsoft/TypeScript](https://github.com/microsoft/TypeScript), and [babel](https://github.com/babel/babel) (jsx).

- `pass/` contains files that must parse cleanly. AST is compared against `pass/snapshots/*.snapshot.json` (ESTree for js/jsx, TypeScript-ESTree for ts).
- `fail/` contains files that must produce a parse error.
- `semantic/` contains files that parse cleanly but must fail [semantic analysis](https://github.com/yuku-toolchain/yuku/blob/main/docs/src/content/docs/parser.md#semantic-analysis), which checks the scope-dependent [early errors](https://tc39.es/ecma262/#early-error) that cannot be caught from local context alone (redeclarations, unresolved exports, private fields used outside their class, and so on).

Filenames are a 16-char content hash. A `.module.` segment marks the file as ESM and is parsed with `sourceType: "module"` (strict mode on), e.g. `abcd…1234.module.js`. Everything else is parsed as a script.

## Usage in yuku

[yuku/test/parser/load.ts](https://github.com/yuku-toolchain/yuku/blob/main/test/parser/load.ts) shallow-clones this repo into `test/parser/suite/` (refreshed daily), keeping only `js`, `jsx`, `ts`. [`run.ts`](https://github.com/yuku-toolchain/yuku/blob/main/test/parser/run.ts) then parses each file with yuku-parser and asserts the expected outcome (parse, error, or AST snapshot match).
