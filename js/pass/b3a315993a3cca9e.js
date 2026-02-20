class ThrowingIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {}
    };
  }
  return() {
    throw new Error();
  }
}
let iterator = new ThrowingIterator();