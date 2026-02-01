var callCount = 0;
var obj = {};
RegExp.prototype[Symbol.matchAll] = function () {
  callCount++;
  return obj;
};