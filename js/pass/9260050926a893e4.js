var regexp = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;
regexp[Symbol.search] = function () {
  callCount += 1;
  thisVal = this;
  args = arguments;
  return returnVal;
};