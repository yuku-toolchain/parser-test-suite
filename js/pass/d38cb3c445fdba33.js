var value = {};
var promise;
try {
  Object.defineProperty(Array.prototype, 'then', {
    get() {
      throw value;
    },
    configurable: true
  });
  promise = Promise.allSettled([]);
} finally {
  delete Array.prototype.then;
}
promise.then(function () {}, function (val) {
  if (val !== value) {
    return;
  }
});