var obj = {};
Function.prototype.configurable = true;
var funObj = function (a, b) {
  return a + b;
};
Object.defineProperty(obj, "property", funObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");