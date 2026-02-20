function* g() {
  for (let i = 4; i >= 0; --i) {
    yield i;
  }
}
let iter = g();
let predicateCalls = 0;
let result = iter.every(v => {
  ++predicateCalls;
  return v;
});