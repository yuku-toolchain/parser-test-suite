var value = {};
var p1 = new Promise(function (_, reject) {
  reject();
});
var p2;
p2 = p1.then(function () {}, function () {
  throw value;
});
p2.then(function () {}, function (x) {
  if (x !== value) {
    return;
  }
});