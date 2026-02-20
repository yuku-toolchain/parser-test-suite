const WrapForValidIteratorPrototype = Object.getPrototypeOf(Iterator.from({}));
{}
{
  const originalIter = {
    return() {
      return {
        value: 5,
        done: true
      };
    }
  };
  const calls = [];
  TemporalHelpers.observeMethod(calls, originalIter, "return", "originalIter");
  const iter = TemporalHelpers.propertyBagObserver(calls, originalIter, "originalIter");
}