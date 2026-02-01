var fulfiller = {
  then: function (resolve) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      resolve();
    });
  }
};
var rejector = {
  then: function (resolve, reject) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      resolve();
      reject();
    });
  }
};
Promise.all([fulfiller, rejector]).then(function () {}, function () {});