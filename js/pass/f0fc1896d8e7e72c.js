var value = {};
var promise;
try {
  Array.prototype.then = function (resolve) {
    resolve(value);
  };
  promise = Promise.allSettled([]);
} finally {
  delete Array.prototype.then;
}
promise.then(function (val) {}, function () {}).then($DONE, $DONE);