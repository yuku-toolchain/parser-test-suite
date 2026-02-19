var obj = {};
Object.defineProperty(obj, "property", {
  configurable: true
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");