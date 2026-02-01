var promise = new Promise(function () {});
var returnCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next() {
      return {
        done: false,
        value: promise
      };
    },
    return() {
      returnCount += 1;
      return {};
    }
  };
};
Object.defineProperty(promise, 'then', {
  get() {}
});
Promise.allSettled(iter);