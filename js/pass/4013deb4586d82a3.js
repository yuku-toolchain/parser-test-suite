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
      count += 1;
    }
  };
};
Map.prototype.set = function () {};