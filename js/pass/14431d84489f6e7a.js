function* g() {
  yield 0;
}
let iter = g();
let expectedThis = (function () {
  return this;
}).call(undefined);
let assertionCount = 0;
iter = iter.filter(function (v, count) {
  ++assertionCount;
  return true;
});
iter.next();