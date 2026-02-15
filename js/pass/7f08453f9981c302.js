var obj = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;
obj[Symbol.matchAll] = function () {
  callCount++;
  thisVal = this;
  args = arguments;
  return returnVal;
};
var str = '';