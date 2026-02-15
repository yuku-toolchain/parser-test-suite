var obj = {};
var regObj = new RegExp();
regObj.get = function () {
  return "regExpGetProperty";
};
Object.defineProperty(obj, "property", regObj);