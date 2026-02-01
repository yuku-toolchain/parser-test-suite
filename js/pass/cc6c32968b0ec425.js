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
let iterator = new TestIterator().map(() => 0);
iterator.return();
iterator.return();