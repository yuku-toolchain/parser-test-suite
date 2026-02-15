var poison = [];
var error = new Test262Error();
Object.defineProperty(poison, Symbol.iterator, {
  get() {
    throw error;
  }
});
try {
  Promise.allSettled(poison).then(function () {}, function (err) {}).then($DONE, $DONE);
} catch (error) {}