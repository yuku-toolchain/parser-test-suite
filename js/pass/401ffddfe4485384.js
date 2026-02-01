var iterThrows = {};
var error = new Test262Error();
iterThrows[Symbol.iterator] = function () {
  return {
    next: function () {
      throw error;
    }
  };
};
Promise.race(iterThrows).then(function () {}, function (reason) {}).then($DONE, $DONE);