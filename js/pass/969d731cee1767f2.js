var value = {};
var rejectCallCount = 0;
var thenable = new Promise(function (resolve) {
  resolve();
});
var resolvedValue;
thenable.then = function (resolve) {
  resolve(value);
};
Promise.resolve(thenable).then(function (val) {
  resolvedValue = val;
}, function () {
  rejectCallCount += 1;
});