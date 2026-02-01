var value = {};
var promise;
try {
  Object.defineProperty(Array.prototype, 'then', {
    get: function () {
      throw value;
    },
    configurable: true
  });
  promise = Promise.all([]);
} finally {
  delete Array.prototype.then;
}
promise.then(function () {}, function (val) {
  if (val !== value) {
    return;
  }
});