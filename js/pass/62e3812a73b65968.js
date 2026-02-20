var promise = new Promise(function () {});
var error = new Test262Error();
Object.defineProperty(promise, 'then', {
  get() {
    throw error;
  }
});
Promise.allSettled([promise]).then(function () {}, function (reason) {}).then($DONE, $DONE);