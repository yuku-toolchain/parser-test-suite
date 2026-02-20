let error = new Test262Error();
let promise = Promise.resolve();
promise.then = function () {
  throw error;
};
Promise.any([promise]).then(() => {}, reason => {}).then($DONE, $DONE);