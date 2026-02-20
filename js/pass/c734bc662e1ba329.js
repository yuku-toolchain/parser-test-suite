var obj = {};
var numObj = new Number(-2);
numObj.get = function () {
  return "numberGetProperty";
};
Object.defineProperty(obj, "property", numObj);