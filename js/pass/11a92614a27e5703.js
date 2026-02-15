var returnValue = null;
var thenable = new Promise(function () {});
var p = new Promise(function (resolve, reject) {
  resolve();
  returnValue = reject(thenable);
});
p.then(function () {}, function () {});