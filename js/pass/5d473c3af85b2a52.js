var obj = {};
var funObj = function () {};
funObj.get = function () {
  return "functionGetProperty";
};
Object.defineProperty(obj, "property", funObj);