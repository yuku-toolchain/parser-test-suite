function* g() {
  yield 0;
}
function* h() {
  yield 0;
  yield 1;
  yield 2;
}
let iter = g().flatMap(v => {
  let n = h();
  return {
    [Symbol.iterator]: 0,
    next: () => n.next()
  };
});
iter = g().flatMap(v => {
  let n = h();
  return {
    [Symbol.iterator]: null,
    next: () => n.next()
  };
});
iter = g().flatMap(v => {
  let n = h();
  return {
    [Symbol.iterator]: undefined,
    next: () => n.next()
  };
});