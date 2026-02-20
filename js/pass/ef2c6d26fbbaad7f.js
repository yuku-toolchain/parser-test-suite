var value = {};
var resolve;
var p = new Promise(function (_resolve) {
  resolve = _resolve;
});
p.then(function (x) {
  if (x !== value) {
    return;
  }
}, function () {});
resolve(value);