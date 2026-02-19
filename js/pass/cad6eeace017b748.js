var obj = {};
var arrObj = [];
arrObj.get = function () {
  return "arrayGetProperty";
};
Object.defineProperty(obj, "property", arrObj);