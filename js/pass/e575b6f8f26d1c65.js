class Custom extends Promise {}
let values = [1, 2, 3];
let cresolveCallCount = 0;
let presolveCallCount = 0;
let boundCustomResolve = Custom.resolve.bind(Custom);
let boundPromiseResolve = Promise.resolve.bind(Promise);
Custom.resolve = function (...args) {
  cresolveCallCount += 1;
  return boundCustomResolve(...args);
};
Promise.resolve = function (...args) {
  presolveCallCount += 1;
  return boundPromiseResolve(...args);
};
Promise.any.call(Custom, values).then(() => {}).then($DONE, $DONE);