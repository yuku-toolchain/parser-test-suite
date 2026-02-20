var iterNextValThrows = {};
var returnCount = 0;
var nextCount = 0;
var poisonedVal = {
  done: false
};
var error = new Test262Error();
Object.defineProperty(poisonedVal, 'value', {
  get() {
    throw error;
  }
});
iterNextValThrows[Symbol.iterator] = function () {
  return {
    next() {
      nextCount += 1;
      return poisonedVal;
    },
    return() {
      returnCount += 1;
      return {};
    }
  };
};
Promise.allSettled(iterNextValThrows);