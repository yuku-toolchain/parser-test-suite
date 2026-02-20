var thenable = new Promise(function () {});
var returnValue = null;
var p = new Promise(function (_, reject) {
  returnValue = reject(thenable);
});
p.then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});