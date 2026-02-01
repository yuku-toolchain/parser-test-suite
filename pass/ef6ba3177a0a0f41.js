function* g() {
  yield 0;
}
let iter = g();
let expectedThis = (function () {
  return this;
}).call(undefined);
let assertionCount = 0;
iter = iter.map(function (v, count) {
  ++assertionCount;
  return v;
});
iter.next();