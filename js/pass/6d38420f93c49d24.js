var thrown = new Test262Error();
var P = function (executor) {
  return new Promise(function (_, reject) {
    executor(function () {
      throw thrown;
    }, reject);
  });
};
P.resolve = function () {};
Promise.allSettled.call(P, []).then(function () {}, function (reason) {
  if (reason !== thrown) {
    return;
  }
});