let rejectCallCount = 0;
let returnValue = {};
let error = new Test262Error();
function Constructor(executor) {
  function reject(value) {
    rejectCallCount += 1;
    return returnValue;
  }
  executor(() => {
    throw error;
  }, reject);
}
Constructor.resolve = function (v) {
  return v;
};
Constructor.reject = function (v) {
  return v;
};
let pOnRejected;
let p = {
  then(onResolved, onRejected) {
    pOnRejected = onRejected;
    onResolved();
  }
};
Promise.allSettled.call(Constructor, [p]);
pOnRejected();