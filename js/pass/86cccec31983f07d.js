const validScriptOptions = [[null, 'Null'], ['bali', 'Bali'], ['Bali', 'Bali'], ['bALI', 'Bali'], [{
  toString() {
    return 'Brai';
  }
}, 'Brai']];
for (const [script, expected] of validScriptOptions) {
  let expect = expected ? 'en-' + expected : 'en';
  expect = (expected ? 'en-' + expected : 'en') + '-DK';
  expect = expected ? 'en-' + expected : 'en-Cyrl';
}