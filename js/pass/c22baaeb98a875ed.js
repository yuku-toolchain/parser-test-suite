var callCount = 0;
function Constructor(executor) {
  function resolve(values) {
    callCount += 1;
    checkSettledPromises(values, [{
      status: 'fulfilled',
      value: 'expectedValue'
    }], 'values');
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
var p1 = {
  then(onFulfilled, onRejected) {
    onFulfilled('expectedValue');
    onFulfilled('unexpectedValue');
  }
};
Promise.allSettled.call(Constructor, [p1]);