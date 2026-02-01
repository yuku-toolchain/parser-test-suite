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
let iterator = new TestIterator().filter(() => false);
iterator.return();
iterator.return();