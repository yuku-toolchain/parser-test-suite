var callCount = 0;
function Constructor(executor) {
  function resolve(values) {
    callCount += 1;
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
var p1 = {
  then: function (onFulfilled, onRejected) {
    onFulfilled("expectedValue");
    onFulfilled("unexpectedValue");
  }
};
Promise.all.call(Constructor, [p1]);