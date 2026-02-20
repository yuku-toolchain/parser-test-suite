var obj = {};
String.prototype.get = function () {
  return "stringGetProperty";
};
var strObj = new String();
Object.defineProperty(obj, "property", strObj);