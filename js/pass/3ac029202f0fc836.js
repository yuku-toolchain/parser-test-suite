class ThrowingIterator extends Iterator {
  next() {
    return {
      done: true,
      get value() {}
    };
  }
  return() {
    throw new Error();
  }
}
let iterator = new ThrowingIterator();
iterator.forEach(() => {});