let error = new Test262Error();
let promise = Promise.resolve();
Object.defineProperty(promise, 'then', {
  get() {
    throw error;
  }
});
Promise.any([promise]).then(() => {}, reason => {}).then($DONE, $DONE);