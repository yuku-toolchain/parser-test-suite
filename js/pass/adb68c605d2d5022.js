var closeCount = 0;
var mapFn = function () {};
var items = {};
items[Symbol.iterator] = function () {
  return {
    return: function () {
      closeCount += 1;
    },
    next: function () {
      return {
        done: false
      };
    }
  };
};