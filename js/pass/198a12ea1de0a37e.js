var returnValue = null;
var promise = new Promise(function (resolve) {
  returnValue = resolve(45);
});
promise.then(function (value) {
  if (value !== 45) {
    return;
  }
}, function () {});