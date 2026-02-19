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
new (function () {
  callCount += 1;
})(1, 2, 3, ...iter);