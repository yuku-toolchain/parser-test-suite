var obj = {};
Object.defineProperty(obj, "property", {
  configurable: new Boolean(true)
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");