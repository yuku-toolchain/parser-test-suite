function rejectFunction() {}
function Constructor(executor) {
  executor(Test262Error.thrower, rejectFunction);
}
Constructor.resolve = function (v) {
  return v;
};
var callCount1 = 0, callCount2 = 0;
var p1 = {
  then: function (onFulfilled, onRejected) {
    callCount1 += 1;
  }
};
var p2 = {
  then: function (onFulfilled, onRejected) {
    callCount2 += 1;
  }
};
Promise.all.call(Constructor, [p1, p2]);