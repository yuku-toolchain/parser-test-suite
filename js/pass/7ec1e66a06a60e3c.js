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
    return {};
  }
}
let iterator = new TestIterator();
let callbackCalls = 0;