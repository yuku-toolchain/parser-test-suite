var thenable = {
  then: function (_, reject) {
    reject();
  }
};
Promise.all([thenable]).then(function () {}, function (x) {});