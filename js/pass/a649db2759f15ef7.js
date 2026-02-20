var iterNextValThrows = {};
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
      return poisonedVal;
    }
  };
};
Promise.allSettled(iterNextValThrows).then(function () {}, function (reason) {}).then($DONE, $DONE);