var simulation = {};
var fulfiller = {
  then(resolve) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      resolve(42);
    });
  }
};
var rejector = {
  then(resolve, reject) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      resolve(simulation);
      reject();
    });
  }
};
Promise.allSettled([fulfiller, rejector]).then(settleds => {}).then($DONE, $DONE);