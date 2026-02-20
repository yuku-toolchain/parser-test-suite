function* g() {
  yield 'a';
}
let iter = g();
let assertionCount = 0;
let result = iter.reduce((memo, v, count) => {
  ++assertionCount;
  return v;
});