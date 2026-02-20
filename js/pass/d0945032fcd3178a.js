let callCount = 0;
let errorArray;
function Constructor(executor) {
  executor(Test262Error.thrower, error => {
    callCount++;
    errorArray = error.errors;
  });
}
Constructor.resolve = function (v) {
  return v;
};
let p1OnRejected;
let p1 = {
  then(onFulfilled, onRejected) {
    p1OnRejected = onRejected;
    onRejected("onRejectedValue");
  }
};
Promise.any.call(Constructor, [p1]);
p1OnRejected("unexpectedonRejectedValue");