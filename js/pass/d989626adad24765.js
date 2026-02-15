var err = new Test262Error();
var CustomPromise = function (executor) {
  return new Promise(executor);
};
CustomPromise.resolve = function () {
  throw err;
};
Promise.race.call(CustomPromise, [1]).then(function () {}, function (reason) {});