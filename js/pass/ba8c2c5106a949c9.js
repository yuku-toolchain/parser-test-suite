var obj = {};
Boolean.prototype.get = function () {
  return "booleanGetProperty";
};
var boolObj = new Boolean(true);
Object.defineProperty(obj, "property", boolObj);