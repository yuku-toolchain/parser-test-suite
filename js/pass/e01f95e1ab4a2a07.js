var resolver = {
  then(resolve) {
    new Promise(resolve => resolve()).then(() => resolve(42));
  }
};
var lateRejector = {
  then(resolve, reject) {
    new Promise(resolve => resolve()).then(() => {
      resolve(9);
      reject();
    });
  }
};
Promise.allSettled([resolver, lateRejector]).then(resolution => {}).then($DONE, $DONE);