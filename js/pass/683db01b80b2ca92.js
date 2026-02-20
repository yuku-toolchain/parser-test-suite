var promise = new Promise(function () {});
var iter = {};
var returnCount = 0;
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        done: false,
        value: promise
      };
    },
    return: function () {
      returnCount += 1;
      return {};
    }
  };
};
promise.then = function () {};
Promise.race(iter);