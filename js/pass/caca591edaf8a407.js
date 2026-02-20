var iterable = {};
var iterationCount = 0;
var returnCount = 0;
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        done: false,
        get value() {}
      };
    },
    return: function () {
      returnCount += 1;
      return {};
    }
  };
};