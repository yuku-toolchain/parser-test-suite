let error = new Test262Error();
Object.defineProperty(Promise, 'resolve', {
  get() {
    throw error;
  }
});
Promise.any([1]).then(() => {}, reason => {}).then($DONE, $DONE);