let promise = Promise.resolve();
let boundThen = promise.then.bind(promise);
let callCount = 0;
promise.then = function (resolver, rejectElement) {
  callCount++;
  return boundThen(resolver, rejectElement);
};
Promise.any([promise]).then(() => {}, $DONE);