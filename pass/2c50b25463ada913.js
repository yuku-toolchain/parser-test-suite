var obj = {};
Number.prototype.get = function () {
  return "numberGetProperty";
};
var numObj = new Number(-2);
Object.defineProperty(obj, "property", numObj);