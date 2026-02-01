var promise = new Promise(function () {});
var returnCount = 0;
var iter = {};
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
Object.defineProperty(promise, "then", {
  value: function () {}
});
Promise.all(iter);