var obj = {};
var returnVal = {};
var callCount = 0;
var thisVal, args;
RegExp.prototype[Symbol.matchAll] = function () {
  callCount++;
  thisVal = this;
  args = arguments;
  return returnVal;
};
var regexp = /./g;
var str = '';