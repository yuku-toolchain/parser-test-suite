var p1 = new Promise(function (resolve) {
  resolve();
});
var p2;
p2 = p1.then(function () {
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