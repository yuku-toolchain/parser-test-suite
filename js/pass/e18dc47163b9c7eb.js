var searchValue = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;
searchValue[Symbol.replace] = function () {
  callCount += 1;
  thisVal = this;
  args = arguments;
  return returnVal;
};