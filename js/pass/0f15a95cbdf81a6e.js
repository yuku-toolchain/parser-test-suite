function* g() {
  yield 0;
}
Number.prototype[Symbol.iterator] = function* () {
  let i = 0;
  let target = this >>> 0;
  while (i < target) {
    yield i;
    ++i;
  }
};
let iter = g().flatMap(v => new Number(5));