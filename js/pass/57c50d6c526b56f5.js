var returnValue = null;
var resolve;
var promise = new Promise(function (_resolve) {
  resolve = _resolve;
});
promise.then(function (value) {
  if (value !== 45) {
    return;
  }
}, function () {});
returnValue = resolve(45);