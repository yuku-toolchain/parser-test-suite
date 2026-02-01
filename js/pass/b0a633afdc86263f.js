var p1 = new Promise(function (_, reject) {
  reject();
});
var p2;
p2 = p1.then(function () {}, function () {
  return p2;
});
p2.then(function () {}, function (reason) {
  if (!reason) {
    return;
  }
  if (reason.constructor !== TypeError) {
    return;
  }
});