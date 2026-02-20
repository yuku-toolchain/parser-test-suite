var value = {};
var p = new Promise(function (_, reject) {
  reject(value);
});
p.then(function () {}, function (x) {
  if (x !== value) {
    return;
  }
});