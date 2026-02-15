class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  get return() {}
}
let iterator = new TestIterator().take(1);
iterator.next();