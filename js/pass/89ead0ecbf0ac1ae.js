var nextCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      var i = nextCount++;
      return {
        done: true,
        value: undefined
      };
    }
  };
};
var result = eval(...iter);