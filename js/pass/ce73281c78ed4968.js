var value = {};
var thenable = {
  then: function (resolve) {
    resolve(value);
  }
};
Promise.race([thenable]).then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});