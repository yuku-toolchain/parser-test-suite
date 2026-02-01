var obj = {};
var p = Promise.reject(obj).then().then(function () {}, function (arg) {
  if (arg !== obj) {
    return;
  }
});