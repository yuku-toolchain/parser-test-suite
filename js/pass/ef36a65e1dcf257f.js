var error = new Test262Error();
Object.defineProperty(Promise, 'resolve', {
  get: function () {
    throw error;
  }
});
Promise.all([new Promise(function () {})]).then(function () {}, function (reason) {}).then($DONE, $DONE);