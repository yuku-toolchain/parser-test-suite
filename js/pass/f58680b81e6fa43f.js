function* g() {
  yield 0;
  yield 0;
  yield 0;
  yield 1;
}
let iter = g();
let predicateCalls = 0;
iter = iter.filter(v => {
  ++predicateCalls;
  return v;
});
iter.next();
iter.next();