let returnCount = 0;
class TestIterator extends Iterator {
  next() {
    return {
      done: true,
      value: undefined
    };
  }
  return() {}
}
let iterator = new TestIterator().filter(() => true);
iterator.next();
iterator.return();
iterator = new TestIterator().filter(() => true);
iterator.next();
iterator.return();
iterator = new TestIterator().filter(() => true).filter(() => true).filter(() => true);
iterator.next();
iterator.return();