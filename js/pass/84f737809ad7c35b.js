var obj = {};
var strObj = new String();
strObj.get = function () {
  return "stringGetProperty";
};
Object.defineProperty(obj, "property", strObj);