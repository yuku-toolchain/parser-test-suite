let returnCalls = 0;
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  return() {
    ++returnCalls;
    throw new Error();
  }
}
let iterator = new TestIterator().filter(() => {});