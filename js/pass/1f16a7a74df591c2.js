var obj = {};
var attr = {
  configurable: new Boolean(false)
};
Object.defineProperty(obj, "property", attr);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");