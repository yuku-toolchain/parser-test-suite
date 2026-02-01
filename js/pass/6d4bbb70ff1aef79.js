let callCount = 0;
let thenable = {
  then(_, reject) {
    callCount++;
    reject('reason');
  }
};
Promise.any([thenable]).then(() => {}, error => {});