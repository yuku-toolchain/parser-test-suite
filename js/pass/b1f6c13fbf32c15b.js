var obj = {};
Error.prototype.get = function () {
  return "errorGetProperty";
};
var errObj = new Error();
Object.defineProperty(obj, "property", errObj);