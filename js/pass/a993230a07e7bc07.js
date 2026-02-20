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
    onFulfilled("expectedValue-p1");
    onFulfilled("unexpectedValue-p1");
  }
};
var p2 = {
  then: function (onFulfilled, onRejected) {
    onFulfilled("expectedValue-p2");
    onFulfilled("unexpectedValue-p2");
  }
};
Promise.all.call(Constructor, [p1, p2]);