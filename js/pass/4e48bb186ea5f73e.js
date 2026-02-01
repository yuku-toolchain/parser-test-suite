var value = {};
var thenable = {
  then: function (resolve) {
    resolve(value);
  }
};
Promise.resolve(thenable).then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});