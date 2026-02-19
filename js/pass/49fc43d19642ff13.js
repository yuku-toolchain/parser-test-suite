var obj = {};
var errObj = new Error();
errObj.get = function () {
  return "errorGetProperty";
};
Object.defineProperty(obj, "property", errObj);