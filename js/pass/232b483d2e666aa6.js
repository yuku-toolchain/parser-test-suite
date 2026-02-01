var returnValue = null;
var thenable = new Promise(function () {});
var p = new Promise(function (resolve, reject) {
  reject(thenable);
  returnValue = resolve();
});
p.then(function () {}, function () {});