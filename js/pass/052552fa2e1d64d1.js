var returnValue = null;
var value = {};
var resolve;
var thenable = new Promise(function (resolve) {
  resolve();
});
var promise = new Promise(function (_resolve) {
  resolve = _resolve;
});
thenable.then = function (resolve) {
  resolve(value);
};
promise.then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});
returnValue = resolve(thenable);