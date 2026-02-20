var thrown = new Test262Error();
Promise.resolve = function () {
  throw thrown;
};
Promise.allSettled([1]).then(function () {}, function (reason) {
  if (reason !== thrown) {}
}).then($DONE, $DONE);