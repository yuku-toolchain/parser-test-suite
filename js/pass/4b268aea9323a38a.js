var iterNextValThrows = {};
var error = new Test262Error();
iterNextValThrows[Symbol.iterator] = function () {
  return {
    next() {
      throw error;
    }
  };
};
Promise.allSettled(iterNextValThrows).then(function () {}, function (reason) {}).then($DONE, $DONE);