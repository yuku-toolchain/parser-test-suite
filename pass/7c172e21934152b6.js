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
let iterator = new TestIterator().take(0);
iterator.next();
iterator.return();
iterator = new TestIterator().take(1);
iterator.next();
iterator.return();
iterator = new TestIterator().take(1);
iterator.next();
iterator.return();
iterator = new TestIterator().take(1).take(1).take(1).take(1).take(1);
iterator.next();
iterator.return();