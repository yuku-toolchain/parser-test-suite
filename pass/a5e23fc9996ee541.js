var iter = {};
var poisonedValue = Object.defineProperty({}, 'value', {
  get: function () {}
});
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedValue;
    }
  };
};