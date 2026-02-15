var value = {};
var p = new Promise(function (resolve) {
  resolve(value);
});
p.then(function (x) {
  if (x !== value) {
    return;
  }
}, function () {});