var iter = {};
iter[Symbol.iterator] = function () {
  var nextCount = 0;
  return {
    next: function () {
      nextCount += 1;
      return {
        done: nextCount === 3,
        value: nextCount
      };
    }
  };
};
var callCount = 0;
new (function () {
  callCount += 1;
})(...iter);