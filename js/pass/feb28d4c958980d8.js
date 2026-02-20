function* g() {
  yield 0;
  yield 1;
  yield 2;
}
let iter = (function () {
  let n = g();
  return {
    [Symbol.iterator]: 0,
    next: () => n.next()
  };
})();
iter = (function () {
  let n = g();
  return {
    [Symbol.iterator]: null,
    next: () => n.next()
  };
})();
iter = (function () {
  let n = g();
  return {
    [Symbol.iterator]: undefined,
    next: () => n.next()
  };
})();