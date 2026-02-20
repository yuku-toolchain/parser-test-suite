var obj = {};
Error.prototype.configurable = true;
var errObj = new Error();
Object.defineProperty(obj, "property", errObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");