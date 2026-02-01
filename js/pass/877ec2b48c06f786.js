var count = 0;
var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: null,
        done: false
      };
    },
    return: function () {
      count += 1;
    }
  };
};
WeakSet.prototype.add = function () {};