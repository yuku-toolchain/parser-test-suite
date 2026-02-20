const calls = [];
const expectedIteratorResult = {
  value: 5,
  done: true
};
const originalIter = {
  return() {
    return expectedIteratorResult;
  }
};
TemporalHelpers.observeMethod(calls, originalIter, "return", "originalIter");
const iter = TemporalHelpers.propertyBagObserver(calls, originalIter, "originalIter");
const wrapper = Iterator.from(iter);