var resolve;
var thenable = new Promise(function (_resolve) {
  resolve = _resolve;
});
var p1 = new Promise(function (resolve) {
  resolve();
});
var p2;
p2 = p1.then(function () {
  throw thenable;
});
p2.then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});
resolve();