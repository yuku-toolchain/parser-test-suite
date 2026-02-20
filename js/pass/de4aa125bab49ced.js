const calls = [];
const iter = TemporalHelpers.propertyBagObserver(calls, {
  return() {
    return {
      value: 5,
      done: true
    };
  }
}, "originalIter");
const wrapper = Iterator.from(iter);
wrapper.return();