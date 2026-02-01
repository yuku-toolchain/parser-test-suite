function* g() {
  yield 0;
  yield 1;
}
let iter = g();
let expectedThis = (function () {
  return this;
}).call(undefined);
let assertionCount = 0;
let result = iter.reduce(function (memo, v, count) {
  ++assertionCount;
  return memo;
});