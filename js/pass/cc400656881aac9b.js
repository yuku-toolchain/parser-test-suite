var regexp = /./g;
var str = 'abc';
var iter = regexp[Symbol.matchAll](str);
var callArgs, callCount;
function callNextWithExecReturnValue(returnValue) {
  callArgs = undefined;
  callCount = 0;
  RegExp.prototype.exec = function () {
    callArgs = arguments;
    callCount++;
    return returnValue;
  };
  return iter.next();
}
var firstExecReturnValue = ['ab'];
var result = callNextWithExecReturnValue(firstExecReturnValue);
result = callNextWithExecReturnValue(null);