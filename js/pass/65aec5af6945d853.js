let callCount = 0;
let errorArray;
function Constructor(executor) {
  function reject(error) {
    callCount += 1;
    errorArray = error.errors;
  }
  executor(Test262Error.thrower, reject);
}
Constructor.resolve = function (v) {
  return v;
};
let p1OnRejected;
let p1 = {
  then(onResolved, onRejected) {
    p1OnRejected = onRejected;
  }
};
let p2 = {
  then(onResolved, onRejected) {
    p1OnRejected("p1-rejection");
    onRejected("p2-rejection");
  }
};
let p3 = {
  then(onResolved, onRejected) {
    onRejected("p3-rejection");
  }
};
Promise.any.call(Constructor, [p1, p2, p3]);
p1OnRejected("unexpectedonRejectedValue");