var callCount = 0;
var valuesArray;
var expected = [{
  status: 'fulfilled',
  value: 'expectedValue'
}];
function Constructor(executor) {
  function resolve(values) {
    callCount += 1;
    valuesArray = values;
    checkSettledPromises(values, expected, 'values');
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
var p1OnFulfilled;
var p1 = {
  then(onFulfilled, onRejected) {
    p1OnFulfilled = onFulfilled;
    onFulfilled('expectedValue');
  }
};
Promise.allSettled.call(Constructor, [p1]);
checkSettledPromises(valuesArray, expected, 'valuesArray after call to all()');
p1OnFulfilled('unexpectedValue');
checkSettledPromises(valuesArray, expected, 'valuesArray after call to onFulfilled()');