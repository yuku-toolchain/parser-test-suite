var target = new Promise(function () {});
var returnValue = {};
var callCount = 0;
var thisValue = null;
var argCount = null;
var resolve = null;
var reject = null;
target.then = function (a, b) {
  callCount += 1;
  thisValue = this;
  argCount = arguments.length;
  resolve = a;
  reject = b;
  return returnValue;
};
var originalFinallyHandler = function () {};
var result = Promise.prototype.finally.call(target, originalFinallyHandler, 2, 3);