var nextCount = 0;
var returnCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      nextCount += 1;
      return {
        done: true
      };
    },
    return: function () {
      returnCount += 1;
      return {};
    }
  };
};
var P = function (executor) {
  return new Promise(function (_, reject) {
    executor(function () {}, reject);
  });
};
P.resolve = Promise.resolve;
Promise.all.call(P, iter);