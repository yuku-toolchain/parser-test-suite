function* g() {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
}
let iter = g();
let predicateCalls = 0;
let result = iter.every(v => {
  ++predicateCalls;
  return v < 3;
});
let {done, value} = iter.next();