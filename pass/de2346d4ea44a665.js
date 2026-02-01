var thenable = new Promise(function () {});
var returnValue = null;
var reject;
var p = new Promise(function (_, _reject) {
  reject = _reject;
});
p.then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});
returnValue = reject(thenable);