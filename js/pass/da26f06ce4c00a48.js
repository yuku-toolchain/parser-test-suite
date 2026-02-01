var returnValue = null;
var value = {};
var thenable = new Promise(function (resolve) {
  resolve(value);
});
var promise = new Promise(function (resolve) {
  returnValue = resolve(thenable);
});
promise.then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});