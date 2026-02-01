var callCount = 0;
var iterationCount = 0;
var iterable = {};
var x = {
  set attr(_) {}
};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        done: false,
        value: 0
      };
    },
    return: function () {
      callCount += 1;
    }
  };
};