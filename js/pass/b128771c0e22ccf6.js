var value = {};
var reject;
var p = new Promise(function (_, _reject) {
  reject = _reject;
});
p.then(function () {}, function (x) {
  if (x !== value) {
    return;
  }
});
reject(value);