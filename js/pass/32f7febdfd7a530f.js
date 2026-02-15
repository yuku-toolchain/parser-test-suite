var targetObj = function () {};
var func = function (a, b) {
  arguments[2] = function () {};
  return Array.prototype.lastIndexOf.call(arguments, targetObj) === 1 && Array.prototype.lastIndexOf.call(arguments, arguments[2]) === -1;
};