var iter = {};
iter[Symbol.iterator] = function () {
  var nextCount = 3;
  return {
    next: function () {
      nextCount += 1;
      return {
        done: nextCount === 6,
        value: nextCount
      };
    }
  };
};
var callCount = 0;
(function () {
  callCount += 1;
}).apply(null, [1, 2, 3, ...iter]);