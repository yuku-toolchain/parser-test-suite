var returnValue = null;
var thenable = new Promise(function () {});
var resolve, reject;
var p = new Promise(function (_resolve, _reject) {
  resolve = _resolve;
  reject = _reject;
});
p.then(function () {}, function () {});
resolve();
returnValue = reject(thenable);