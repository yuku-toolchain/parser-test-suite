var resolve, reject;
var promise = new Promise(function (_resolve, _reject) {
  resolve = _resolve;
  reject = _reject;
});
var P = function (executor) {
  executor(resolve, reject);
  return promise;
};
Promise.resolve.call(P, promise).then(function () {}, function (value) {
  if (!value) {
    return;
  }
  if (value.constructor !== TypeError) {
    return;
  }
});