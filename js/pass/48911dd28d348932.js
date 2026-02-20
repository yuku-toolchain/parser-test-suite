var reject;
var thenable = new Promise(function (resolve) {
  resolve();
});
var p1 = new Promise(function (_, _reject) {
  reject = _reject;
});
var p2;
p2 = p1.then(function () {}, function () {
  throw thenable;
});
p2.then(function () {}, function (x) {
  if (x !== thenable) {
    return;
  }
});
reject();