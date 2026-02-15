let boundPromiseResolve = Promise.resolve.bind(Promise);
let getCount = 0;
let callCount = 0;
Object.defineProperty(Promise, 'resolve', {
  configurable: true,
  get() {
    getCount += 1;
    return function (...args) {
      callCount += 1;
      return boundPromiseResolve(...args);
    };
  }
});
Promise.any([]).then(() => {}, ({errors}) => {}).then($DONE, $DONE);