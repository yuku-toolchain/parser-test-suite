var thenable = {
  then: function (_, reject) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      reject();
    });
  }
};
Promise.all([thenable]).then(function () {}, function (x) {});