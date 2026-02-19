var promise = new Promise(function () {});
var error = new Test262Error();
Object.defineProperty(promise, "then", {
  value: function () {
    throw error;
  }
});
Promise.all([promise]).then(function () {}, function (reason) {}).then($DONE, $DONE);