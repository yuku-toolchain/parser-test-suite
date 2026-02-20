const toNumberResults = [[undefined, NaN], [null, +0], [true, 1], [false, +0], ['42', 42], ['foo', NaN]];
const nf = new Intl.NumberFormat();
function assertSameParts(actual, expected) {
  for (let i = 0; i < expected.length; ++i) {}
}
toNumberResults.forEach(pair => {
  const [value, result] = pair;
  assertSameParts(nf.formatToParts(value), nf.formatToParts(result));
});
let count = 0;
const dummy = {};
dummy[Symbol.toPrimitive] = hint => hint === 'number' ? ++count : NaN;
assertSameParts(nf.formatToParts(dummy), nf.formatToParts(count));