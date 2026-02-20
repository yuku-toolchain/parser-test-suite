var expectedThis = this, obj = {};
var p = Promise.resolve(obj).then(function (arg) {
  if (this !== expectedThis) {
    return;
  }
  if (arg !== obj) {
    return;
  }
  if (arguments.length !== 1) {
    return;
  }
}, function () {});