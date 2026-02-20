var poisonedValue = Object.defineProperty({}, 'value', {
  get: function () {}
});
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedValue;
    }
  };
};
var C = class {
  static method([...x] = iter) {}
};