var obj = {};
RegExp.prototype.get = function () {
  return "regExpGetProperty";
};
var regObj = new RegExp();
Object.defineProperty(obj, "property", regObj);