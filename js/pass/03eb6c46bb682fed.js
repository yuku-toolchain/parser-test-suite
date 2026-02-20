var obj = {};
Object.defineProperty(obj, "property", {
  configurable: new Date(0)
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");