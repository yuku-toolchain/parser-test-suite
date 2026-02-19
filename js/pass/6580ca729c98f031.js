let values = [1, 1, 1];
let callCount = 0;
let boundPromiseResolve = Promise.resolve.bind(Promise);
Promise.resolve = function (...args) {
  callCount += 1;
  return boundPromiseResolve(...args);
};
Promise.allSettled(values).then(() => {}).then($DONE, $DONE);