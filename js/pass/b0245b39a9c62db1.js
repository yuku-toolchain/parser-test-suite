var value = {};
var p1 = new Promise(function (resolve) {
  resolve();
});
var p2;
p2 = p1.then(function () {
  throw value;
}, function () {});
p2.then(function () {}, function (x) {
  if (x !== value) {
    return;
  }
});