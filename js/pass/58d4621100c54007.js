var obj = {};
var p = Promise.resolve(obj).then().then(function (arg) {
  if (arg !== obj) {
    return;
  }
}, function () {});