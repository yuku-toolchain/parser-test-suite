var iterNextValThrows = {};
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
    }
  };
};
Promise.race(iterNextValThrows).then(function () {}, function (reason) {}).then($DONE, $DONE);