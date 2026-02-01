function* g() {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
}
let obj = {};