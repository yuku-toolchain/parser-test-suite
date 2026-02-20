const iter = {
  get [Symbol.iterator]() {}
};
const resolveError = {
  name: 'MyError'
};
Object.defineProperty(Promise, 'resolve', {
  get() {
    throw resolveError;
  }
});
Promise.allSettled(iter).then(() => {}, reason => {}).then($DONE, $DONE);