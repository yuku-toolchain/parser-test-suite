var spyToPrimitive = {};
var callCount = 0;
var thisValue, args;
spyToPrimitive[Symbol.toPrimitive] = function () {
  thisValue = this;
  args = arguments;
  callCount += 1;
};
new Date(spyToPrimitive);