var callCount = 0;
var valuesArray;
function Constructor(executor) {
  function resolve(values) {
    callCount += 1;
    valuesArray = values;
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
var p1OnFulfilled;
var p1 = {
  then: function (onFulfilled, onRejected) {
    p1OnFulfilled = onFulfilled;
    onFulfilled("expectedValue");
  }
};
Promise.all.call(Constructor, [p1]);
p1OnFulfilled("unexpectedValue");