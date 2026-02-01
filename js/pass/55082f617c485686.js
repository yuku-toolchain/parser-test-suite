var poisonedThen = {};
var err = new Test262Error();
Object.defineProperty(poisonedThen, 'then', {
  get: function () {
    throw err;
  }
});
Promise.resolve(poisonedThen).then(function () {}, function (reason) {}).then($DONE, $DONE);