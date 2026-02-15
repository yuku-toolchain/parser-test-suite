var iterationCount = 0;
var returnGets = 0;
var iterable = {};
iterable[Symbol.asyncIterator] = function () {
  return {
    next: function () {
      return {
        value: 1,
        done: false
      };
    },
    get return() {
      returnGets += 1;
      return null;
    }
  };
};