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
var p1OnFulfilled;
var p1 = {
  then: function (onFulfilled, onRejected) {
    p1OnFulfilled = onFulfilled;
  }
};
var p2 = {
  then: function (onFulfilled, onRejected) {
    onFulfilled("p2-fulfill");
    onFulfilled("p2-fulfill-unexpected");
  }
};
var p3 = {
  then: function (onFulfilled, onRejected) {
    onFulfilled("p3-fulfill");
  }
};
Promise.all.call(Constructor, [p1, p2, p3]);
p1OnFulfilled("p1-fulfill");