var thenable = Promise.resolve();
var returnValue = null;
var p = new Promise(function (_, reject) {
  returnValue = reject(thenable);
});
p.then(function () {}).then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});