var simulation = {};
var fulfiller = {
  then(resolve) {
    resolve(42);
  }
};
var lateRejector = {
  then(resolve, reject) {
    resolve(simulation);
    reject();
  }
};
Promise.allSettled([fulfiller, lateRejector]).then(settleds => {}).then($DONE, $DONE);