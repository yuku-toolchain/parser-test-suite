var obj = {};
Object.prototype.configurable = true;
Object.defineProperty(obj, "property", Math);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");