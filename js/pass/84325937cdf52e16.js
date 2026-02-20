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
let iterator = new TestIterator().map(() => 0);
iterator.next();
iterator.return();
iterator = new TestIterator().map(() => 0);
iterator.next();
iterator.return();
iterator = new TestIterator().map(x => x).map(x => x).map(x => x);
iterator.next();
iterator.return();