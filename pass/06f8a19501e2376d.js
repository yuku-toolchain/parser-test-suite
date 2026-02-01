var obj = {};
Object.defineProperty(obj, "property", {
  configurable: [1, 2, 3]
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");