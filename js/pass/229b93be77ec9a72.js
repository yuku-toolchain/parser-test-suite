var value = {};
var reject;
var thenable = new Promise(function (resolve) {
  resolve();
});
var p1 = new Promise(function (_, _reject) {
  reject = _reject;
});
var p2;
thenable.then = function (resolve) {
  resolve(value);
};
p2 = p1.then(function () {}, function () {
  return thenable;
});
p2.then(function (x) {
  if (x !== value) {
    return;
  }
}, function () {});
reject();