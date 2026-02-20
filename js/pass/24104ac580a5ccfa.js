let callCount = 0;
let fulfiller = {
  then(resolve) {
    new Promise(resolve => {
      callCount++;
      resolve();
    }).then(() => {
      callCount++;
      resolve();
    });
  }
};
let rejector = {
  then(resolve, reject) {
    new Promise(resolve => {
      callCount++;
      resolve();
    }).then(() => {
      callCount++;
      resolve();
      reject();
    });
  }
};
Promise.all([fulfiller, rejector]).then(() => {}, () => {});