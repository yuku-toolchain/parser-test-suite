let promises = [Promise.resolve(), Promise.resolve(), Promise.resolve()];
let callCount = 0;
promises.forEach(promise => {
  let boundThen = promise.then.bind(promise);
  promise.then = function (...args) {
    callCount += 1;
    return boundThen(...args);
  };
});
Promise.any(promises).then(() => {}).then($DONE, $DONE);