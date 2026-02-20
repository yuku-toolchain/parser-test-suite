let returnCount = 0;
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  return() {
    ++returnCount;
    return {};
  }
}
let iterator = new TestIterator().drop(0);
iterator.return();
iterator.return();
returnCount = 0;
iterator = new TestIterator().drop(1);
iterator.return();
iterator.return();
returnCount = 0;
iterator = new TestIterator().drop(1).drop(1).drop(1).drop(1).drop(1);
iterator.return();
iterator.return();