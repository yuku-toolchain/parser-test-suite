var callCount = 0;
function Constructor(executor) {
  function resolve(values) {
    callCount += 1;
    checkSettledPromises(values, [{
      status: 'fulfilled',
      value: 'p1-fulfill'
    }, {
      status: 'fulfilled',
      value: 'p2-fulfill'
    }, {
      status: 'fulfilled',
      value: 'p3-fulfill'
    }], 'values');
  }
  executor(resolve, Test262Error.thrower);
}
Constructor.resolve = function (v) {
  return v;
};
var p1OnFulfilled, p2OnFulfilled, p3OnFulfilled;
var p1 = {
  then(onFulfilled, onRejected) {
    p1OnFulfilled = onFulfilled;
  }
};
var p2 = {
  then(onFulfilled, onRejected) {
    p2OnFulfilled = onFulfilled;
  }
};
var p3 = {
  then(onFulfilled, onRejected) {
    p3OnFulfilled = onFulfilled;
  }
};
Promise.allSettled.call(Constructor, [p1, p2, p3]);
p1OnFulfilled('p1-fulfill');
p1OnFulfilled('p1-fulfill-unexpected-1');
p1OnFulfilled('p1-fulfill-unexpected-2');
p2OnFulfilled('p2-fulfill');
p3OnFulfilled('p3-fulfill');