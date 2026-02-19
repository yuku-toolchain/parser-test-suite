var thenable = {
  then: function (_, reject) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      reject();
    });
  }
};
Promise.race([thenable]).then(function () {}, function () {});