var returnValue = null;
var value = {};
var lateCallCount = 0;
var thenable = new Promise(function (resolve) {
  resolve();
});
thenable.then = function (resolve) {
  resolve(value);
};
var promise = new Promise(function (resolve) {
  returnValue = resolve(thenable);
});
thenable.then = function () {
  lateCallCount += 1;
};
promise.then(function (val) {
  if (val !== value) {
    return;
  }
  if (lateCallCount > 0) {}
}, function () {});