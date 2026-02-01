var startedCount = 0;
var returnCount = 0;
var iterationCount = 0;
var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      startedCount += 1;
      return {
        done: false,
        value: null
      };
    },
    return: function () {
      returnCount += 1;
      return {};
    }
  };
};
(function () {
  for (var x of iterable) {
    iterationCount += 1;
    return;
  }
})();