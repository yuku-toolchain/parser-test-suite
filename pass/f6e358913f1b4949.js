var obj = {};
Object.defineProperty(obj, "property", {
  configurable: new String("bbq")
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");