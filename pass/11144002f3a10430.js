var thenable = {
  then: function (resolve) {
    resolve(23);
  }
};
Promise.race([thenable]).then(function (value) {
  if (value !== 23) {
    return;
  }
}, function () {});