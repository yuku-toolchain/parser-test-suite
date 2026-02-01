var simulation = {};
var thenable = {
  then(_, reject) {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      reject(simulation);
    });
  }
};
Promise.allSettled([thenable]).then(settleds => {}).then($DONE, $DONE);