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
let callbackCalls = 0;
let iterator = new TestIterator().map(() => {
  ++callbackCalls;
});