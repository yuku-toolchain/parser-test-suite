class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  get return() {}
}
let iterator = new TestIterator().flatMap(x => [x]);
iterator.next();