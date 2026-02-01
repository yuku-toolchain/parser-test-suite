function* g() {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
}
let iter = g();
let predicateCalls = 0;
let result = iter.some(v => {
  ++predicateCalls;
  return v > 2;
});
let {done, value} = iter.next();