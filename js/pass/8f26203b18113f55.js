class ThrowingIterator extends Iterator {
  next() {
    return {
      get done() {},
      value: 1
    };
  }
  return() {
    throw new Error();
  }
}
let iterator = new ThrowingIterator().flatMap(x => [x]);