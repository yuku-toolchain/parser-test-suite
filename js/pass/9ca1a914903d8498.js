var target = new Promise(function () {});
var returnValue = {};
var callCount = 0;
var thisValue = null;
var argCount = null;
var firstArg = null;
var secondArg = null;
var result = null;
target.then = function (a, b) {
  callCount += 1;
  thisValue = this;
  argCount = arguments.length;
  firstArg = a;
  secondArg = b;
  return returnValue;
};
result = Promise.prototype.finally.call(target, 1, 2, 3);