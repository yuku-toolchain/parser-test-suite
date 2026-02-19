var returnCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next() {
      return {
        done: true
      };
    },
    return() {
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
P.resolve = function () {};
Promise.allSettled.call(P, iter);