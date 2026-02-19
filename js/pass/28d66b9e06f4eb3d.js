var regexp = /./;
var callCount = 0;
var arg;
var obj = {};
var toStringResult = 'abc';
var receiver = {
  [Symbol.toPrimitive]: function () {
    callCount++;
    return toStringResult;
  }
};
RegExp.prototype[Symbol.matchAll] = function (string) {
  arg = string;
};
String.prototype.matchAll.call(receiver, null);
String.prototype.matchAll.call(receiver, undefined);