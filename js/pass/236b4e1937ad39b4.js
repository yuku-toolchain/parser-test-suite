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
let iterator = new TestIterator().drop(0);
iterator.next();
iterator.return();
iterator = new TestIterator().drop(1);
iterator.next();
iterator.return();
iterator = new TestIterator().drop(1);
iterator.next();
iterator.return();
iterator = new TestIterator().drop(1).drop(1).drop(1).drop(1).drop(1);
iterator.next();
iterator.return();