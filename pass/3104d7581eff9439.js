var rejection = {};
var thenable = {
  then(_, reject) {
    new Promise(resolve => resolve()).then(() => reject(rejection));
  }
};
Promise.any([thenable]).then(() => {}, aggregate => {}).then($DONE, $DONE);