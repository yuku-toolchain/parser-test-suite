var resolve = Promise.resolve;
var getCount = 0;
var callCount = 0;
Object.defineProperty(Promise, 'resolve', {
  configurable: true,
  get() {
    getCount += 1;
    return function () {
      callCount += 1;
      return resolve.apply(Promise, arguments);
    };
  }
});
Promise.all([]);