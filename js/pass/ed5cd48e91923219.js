var promise = new Promise(function (resolve) {
  resolve();
});
var fulfilledCallCount = 0;
var rejectedCallCount = 0;
promise.then(function () {
  fulfilledCallCount += 1;
  throw new Error();
}, function () {
  rejectedCallCount += 1;
});
promise.then(function () {
  if (fulfilledCallCount !== 1) {
    return;
  }
  if (rejectedCallCount !== 0) {
    return;
  }
}, function () {});