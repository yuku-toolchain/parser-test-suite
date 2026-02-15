var iterStepThrows = {};
var poisonedDone = {};
var error = new Test262Error();
Object.defineProperty(poisonedDone, 'done', {
  get() {
    throw error;
  }
});
Object.defineProperty(poisonedDone, 'value', {
  get() {}
});
iterStepThrows[Symbol.iterator] = function () {
  return {
    next() {
      return poisonedDone;
    }
  };
};
Promise.allSettled(iterStepThrows).then(function () {}, function (reason) {}).then($DONE, $DONE);