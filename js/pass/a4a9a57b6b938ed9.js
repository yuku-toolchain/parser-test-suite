var obj = {};
var boolObj = new Boolean(true);
boolObj.get = function () {
  return "booleanGetProperty";
};
Object.defineProperty(obj, "property", boolObj);