let boundPromiseResolve = Promise.resolve.bind(Promise);
Promise.resolve = function (...args) {
  return boundPromiseResolve(...args);
};
Promise.any([1]).then(() => $DONE(), $DONE);