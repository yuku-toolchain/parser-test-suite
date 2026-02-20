var promise = new Promise(function (_, reject) {
  reject();
});
var fulfilledCallCount = 0;
var rejectedCallCount = 0;
promise.then(function () {
  fulfilledCallCount += 1;
}, function () {
  rejectedCallCount += 1;
  throw new Error();
});
promise.then(function () {}, function () {
  if (fulfilledCallCount !== 0) {
    return;
  }
  if (rejectedCallCount !== 1) {
    return;
  }
});