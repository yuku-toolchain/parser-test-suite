var resolver = {
  then(resolve) {
    resolve(42);
  }
};
var lateRejector = {
  then(resolve, reject) {
    resolve(33);
    reject();
  }
};
Promise.allSettled([resolver, lateRejector]).then(resolution => {}).then($DONE, $DONE);