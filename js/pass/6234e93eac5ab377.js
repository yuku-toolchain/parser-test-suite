var obj = {};
Object.prototype.configurable = true;
Object.defineProperty(obj, "property", JSON);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");