Promise.resolve(1).then(function () {
  return Promise.resolve();
}).then($DONE, $DONE);
var then = Promise.prototype.then;
Promise.prototype.then = function (resolve, reject) {
  return then.call(this, resolve, reject);
};