var returnValue = null;
var resolve;
var promise = new Promise(function (_resolve) {
  resolve = _resolve;
});
promise.then(function () {}, function (reason) {
  if (!reason) {
    return;
  }
  if (reason.constructor !== TypeError) {
    return;
  }
});
returnValue = resolve(promise);