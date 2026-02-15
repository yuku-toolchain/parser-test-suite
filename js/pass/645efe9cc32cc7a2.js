var iterStepThrows = {};
var poisonedDone = {};
var error = new Test262Error();
Object.defineProperty(poisonedDone, 'done', {
  get: function () {
    throw error;
  }
});
Object.defineProperty(poisonedDone, 'value', {
  get: function () {}
});
iterStepThrows[Symbol.iterator] = function () {
  return {
    next: function () {
      return poisonedDone;
    }
  };
};
Promise.all(iterStepThrows).then(function () {}, function (reason) {}).then($DONE, $DONE);