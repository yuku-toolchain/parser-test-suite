var p1 = new Promise(function (_, reject) {
  reject();
});
var p2;
p2 = p1.then(function () {}, function () {
  return 23;
});
p2.then(function (value) {
  if (value !== 23) {
    return;
  }
}, function () {});