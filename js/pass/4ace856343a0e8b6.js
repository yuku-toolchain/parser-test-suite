var obj = {};
Array.prototype.get = function () {
  return "arrayGetProperty";
};
var arrObj = [];
Object.defineProperty(obj, "property", arrObj);