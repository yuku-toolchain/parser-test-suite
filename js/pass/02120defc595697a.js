let returnCount = 0;
function* g() {
  yield 0;
}
let iter = g().flatMap(v => ({
  next() {
    return {
      done: false,
      value: 1
    };
  },
  return() {
    ++returnCount;
    return {};
  }
}));
let {done, value} = iter.next();
iter.return();
iter.return();