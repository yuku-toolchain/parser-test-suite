var error = new Test262Error();
Object.defineProperty(Promise, 'resolve', {
  get() {
    throw error;
  }
});
Promise.allSettled([new Promise(function () {})]).then(function () {}, function (reason) {}).then($DONE, $DONE);