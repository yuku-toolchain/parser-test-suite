var thenable = {
  then: function (_, reject) {
    reject();
  }
};
Promise.race([thenable]).then(function () {}, function () {});