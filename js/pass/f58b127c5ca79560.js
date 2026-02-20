var left = {};
var right = {};
var log = '';
var leftThisVal, rightThisVal, leftArgs, rightArgs;
left[Symbol.toPrimitive] = function () {
  log += 'left';
  leftThisVal = this;
  leftArgs = arguments;
};
right[Symbol.toPrimitive] = function () {
  log += 'right';
  rightThisVal = this;
  rightArgs = arguments;
};
left + right;