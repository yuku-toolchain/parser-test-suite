var poisonedPrototypeLength = function () {};
var items = {};
Object.defineProperty(poisonedPrototypeLength.prototype, 'length', {
  set: function (_) {}
});
items[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        done: true
      };
    }
  };
};