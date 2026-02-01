let values = [1, 2, 3];
let callCount = 0;
let boundPromiseResolve = Promise.resolve.bind(Promise);
Promise.resolve = function (...args) {
  callCount += 1;
  return boundPromiseResolve(...args);
};
Promise.all(values).then(() => {}).then($DONE, $DONE);