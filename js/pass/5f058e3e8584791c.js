var value = {};
var thenable = new Promise(function (resolve) {
  resolve(value);
});
var p1 = new Promise(function (_, reject) {
  reject();
});
var p2;
p2 = p1.then(function () {}, function () {
  return thenable;
});
p2.then(function (x) {
  if (x !== value) {
    return;
  }
}, function () {});