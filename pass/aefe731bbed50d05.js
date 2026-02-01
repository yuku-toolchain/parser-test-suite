function* g() {
  yield 'a';
  yield 'b';
  yield 'c';
}
let iter = g();
let assertionCount = 0;
let result = iter.reduce((memo, v, count) => {
  switch (v) {
    case 'b':
      break;
    case 'c':
      break;
    case 'a':
    default:
      throw new Error();
  }
  ++assertionCount;
  return v;
});