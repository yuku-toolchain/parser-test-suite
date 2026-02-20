var thenable = Promise.resolve();
var p = new Promise(function () {
  throw thenable;
});
p.then(function () {}).then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});