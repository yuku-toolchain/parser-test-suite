var obj = {};
Function.prototype.get = function () {
  return "functionGetProperty";
};
var funObj = function () {};
Object.defineProperty(obj, "property", funObj);