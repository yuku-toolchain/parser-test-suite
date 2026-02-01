var returnValue = null;
var value = {};
var resolve;
var thenable = new Promise(function (resolve) {
  resolve(value);
});
var promise = new Promise(function (_resolve) {
  resolve = _resolve;
});
promise.then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});
returnValue = resolve(thenable);