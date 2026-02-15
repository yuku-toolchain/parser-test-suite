function* g() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}
let iter = g().flatMap((v, count) => {
  let result = [];
  for (let i = 0; i < v; ++i) {
    result.push(v);
  }
  return result;
});