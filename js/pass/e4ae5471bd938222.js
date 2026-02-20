var value = {};
var thenableValue = {
  then: function (resolve) {
    resolve(value);
  }
};
var thenable = new Promise(function (resolve) {
  resolve();
});
thenable.then = function (resolve) {
  resolve(thenableValue);
};
Promise.race([thenable]).then(function (val) {
  if (val !== value) {
    return;
  }
}, function () {});