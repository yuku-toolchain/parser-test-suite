function* g() {
  yield 0;
}
let iter = g();
let expectedThis = (function () {
  return this;
}).call(undefined);
let assertionCount = 0;
let result = iter.find(function (v, count) {
  ++assertionCount;
  return true;
});