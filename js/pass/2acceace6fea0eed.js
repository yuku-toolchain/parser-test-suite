function* g() {
  yield 0;
  yield 0;
  yield 0;
  yield 1;
}
let iter = g();
let mapperCalls = 0;
iter = iter.flatMap(v => {
  ++mapperCalls;
  return null;
});