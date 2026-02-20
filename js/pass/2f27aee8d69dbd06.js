const toNumberResults = [[undefined, NaN], [null, +0], [true, 1], [false, 0], ['42', 42], ['foo', NaN], ['Infinity', Infinity], ['-Infinity', -Infinity]];
const nf = new Intl.NumberFormat();
toNumberResults.forEach(pair => {
  const [value, result] = pair;
});
let count = 0;
const dummy = {};
dummy[Symbol.toPrimitive] = hint => hint === 'number' ? ++count : NaN;