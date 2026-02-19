function* g() {
  yield 'a';
  yield 'b';
  yield 'c';
}
let iter = g();
let assertionCount = 0;
let result = iter.some((v, count) => {
  switch (v) {
    case 'a':
      break;
    case 'b':
      break;
    case 'c':
      break;
    default:
      throw new Error();
  }
  ++assertionCount;
  return false;
});