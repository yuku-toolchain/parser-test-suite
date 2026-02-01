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
let iterator = new TestIterator().flatMap(x => [x]);
iterator.next();
iterator.return();
iterator = new TestIterator().flatMap(x => [x]);
iterator.next();
iterator.return();
iterator = new TestIterator().flatMap(x => [x]).flatMap(x => [x]).flatMap(x => [x]);
iterator.next();
iterator.return();