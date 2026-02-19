let fulfiller = {
  then(resolve) {
    resolve();
  }
};
let lateRejector = {
  then(resolve, reject) {
    resolve();
    reject();
  }
};
Promise.any([fulfiller, lateRejector]).then(() => {}, () => {});