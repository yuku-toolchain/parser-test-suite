var y = {};
var callCount = 0;
var thisVal, args;
y[Symbol.toPrimitive] = function () {
  callCount += 1;
  thisVal = this;
  args = arguments;
};
0 == y;