var expectedThis = this, obj = {};
var p = Promise.reject(obj).then(function () {}, function (arg) {
  if (this !== expectedThis) {
    return;
  }
  if (arg !== obj) {
    return;
  }
  if (arguments.length !== 1) {
    return;
  }
});