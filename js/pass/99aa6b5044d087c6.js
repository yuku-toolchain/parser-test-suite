var thenable = new Promise(function () {});
var p = new Promise(function () {
  throw thenable;
});
p.then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});