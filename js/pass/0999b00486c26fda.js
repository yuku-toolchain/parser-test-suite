let error = new Test262Error();
Promise.resolve = function () {
  throw error;
};
Promise.any([1]).then(() => {}, reason => {}).then($DONE, $DONE);