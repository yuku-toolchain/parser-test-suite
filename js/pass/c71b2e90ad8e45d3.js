var obj = {};
var funObj = function (a, b) {
  return a + b;
};
funObj.configurable = true;
Object.defineProperty(obj, "property", funObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");