var thrown = new Test262Error();
Promise.resolve = function () {
  throw thrown;
};
Promise.all([1]).then(function () {}, function (reason) {
  if (reason !== thrown) {}
}).then($DONE, $DONE);