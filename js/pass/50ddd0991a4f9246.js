let resolver = {
  then(resolve) {
    resolve(42);
  }
};
let lateRejector = {
  then(resolve, reject) {
    resolve(33);
    reject();
  }
};
Promise.race([resolver, lateRejector]).then(resolution => {}).then($DONE, $DONE);