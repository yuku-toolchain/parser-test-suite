var value = {};
var resolve;
var thenable = new Promise(function (resolve) {
  resolve(value);
});
var p1 = new Promise(function (_resolve) {
  resolve = _resolve;
});
var p2;
p2 = p1.then(function () {
  return thenable;
});
p2.then(function (x) {
  if (x !== value) {
    return;
  }
}, function () {});
resolve();