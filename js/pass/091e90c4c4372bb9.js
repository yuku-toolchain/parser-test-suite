function* g() {
  yield 'a';
}
let iter = g();
let assertionCount = 0;
let initialValue = {};
let result = iter.reduce((memo, v, count) => {
  switch (v) {
    case 'a':
      break;
    default:
      throw new Error();
  }
  ++assertionCount;
  return v;
}, initialValue);