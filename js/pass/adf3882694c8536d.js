var obj = {};
Boolean.prototype.configurable = true;
var boolObj = new Boolean(true);
Object.defineProperty(obj, "property", boolObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");