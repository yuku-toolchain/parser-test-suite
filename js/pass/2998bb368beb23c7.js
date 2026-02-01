var iterNextValThrows = {};
var returnCount = 0;
var poisonedVal = {
  done: false
};
var error = new Test262Error();
Object.defineProperty(poisonedVal, 'value', {
  get: function () {
    throw error;
  }
});
iterNextValThrows[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedVal;
    },
    return: function () {
      returnCount += 1;
      return {};
    }
  };
};
Promise.all(iterNextValThrows);