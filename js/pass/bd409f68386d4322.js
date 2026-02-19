var itemsPoisonedIteratorValue = {};
var poisonedValue = {};
Object.defineProperty(poisonedValue, 'value', {
  get: function () {}
});
itemsPoisonedIteratorValue[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedValue;
    }
  };
};