var value = {};
var promise;
try {
  Array.prototype.then = function (resolve) {
    resolve(value);
  };
  promise = Promise.all([]);
} finally {
  delete Array.prototype.then;
}
promise.then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});