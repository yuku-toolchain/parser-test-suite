var obj = {};
var attr = {
  configurable: this
};
Object.defineProperty(obj, "property", attr);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");