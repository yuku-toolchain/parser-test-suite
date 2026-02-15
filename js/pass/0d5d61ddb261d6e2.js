var promise = new Promise(function () {});
var error = new Test262Error();
promise.then = function () {
  throw error;
};
Promise.race([promise]).then(function () {}, function (reason) {}).then($DONE, $DONE);