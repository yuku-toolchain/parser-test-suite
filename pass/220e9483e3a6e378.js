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
Promise.all(iter).then(() => {}, reason => {}).then($DONE, $DONE);