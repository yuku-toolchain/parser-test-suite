function rejectFunction() {}
function Constructor(executor) {
  executor(rejectFunction, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
var callCount1 = 0;
var callCount2 = 0;
var p1OnRejected;
var p1 = {
  then(_, onRejected) {
    callCount1 += 1;
    p1OnRejected = onRejected;
  }
};
var p2 = {
  then(_, onRejected) {
    callCount2 += 1;
  }
};
Promise.any.call(Constructor, [p1, p2]);