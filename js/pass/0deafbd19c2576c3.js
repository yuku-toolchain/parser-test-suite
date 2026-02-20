var obj = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;
obj[Symbol.match] = function () {
  callCount += 1;
  thisVal = this;
  args = arguments;
  return returnVal;
};