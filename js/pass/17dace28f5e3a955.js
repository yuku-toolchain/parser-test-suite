function* g() {
  yield 0;
  yield 1;
}
let iter = g();
let predicateCalls = 0;
let result = iter.every(v => {
  ++predicateCalls;
  return false;
});
let {done, value} = iter.next();