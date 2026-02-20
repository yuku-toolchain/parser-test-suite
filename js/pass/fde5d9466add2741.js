var separator = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;
separator[Symbol.split] = function () {
  callCount += 1;
  thisVal = this;
  args = arguments;
  return returnVal;
};