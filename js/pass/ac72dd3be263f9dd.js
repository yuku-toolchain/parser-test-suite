var obj = {};
Object.defineProperty(obj, "property", {
  configurable: Math
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");