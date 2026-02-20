let callCount = 0;
function Constructor(executor) {
  function reject(error) {
    callCount += 1;
  }
  executor(Test262Error.thrower, reject);
}
Constructor.resolve = function (v) {
  return v;
};
let p1 = {
  then(onFulfilled, onRejected) {
    onRejected("expectedValue-p1");
    onRejected("unexpectedValue-p1");
  }
};
let p2 = {
  then(onFulfilled, onRejected) {
    onRejected("expectedValue-p2");
    onRejected("unexpectedValue-p2");
  }
};
Promise.any.call(Constructor, [p1, p2]);