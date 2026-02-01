function* g() {
  yield 0;
  yield 1;
  yield 2;
}
class TestIterator extends Iterator {
  get next() {
    let n = g();
    return function () {
      return n.next();
    };
  }
  return() {}
}
let iterator = new TestIterator();
iterator = iterator.drop(0);
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator = new TestIterator();
iterator = iterator.drop(1);
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator = new TestIterator();
iterator = iterator.drop(1).drop(1).drop(1).drop(1).drop(1);
iterator.next();
iterator.next();
iterator = new TestIterator();
iterator = iterator.drop(10);
iterator.next();
iterator.next();