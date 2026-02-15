var count = 0;
var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: [],
        done: false
      };
    },
    return: function () {
      throw new TypeError('ignore');
    }
  };
};
Map.prototype.set = function () {};