function* g() {
  yield 0;
  yield 1;
  yield 2;
}
let iter = g();
let predicateCalls = 0;
let result = iter.some(v => {
  ++predicateCalls;
  return true;
});
let {done, value} = iter.next();