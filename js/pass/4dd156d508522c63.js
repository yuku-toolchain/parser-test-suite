var obj = {};
RegExp.prototype.configurable = true;
var regObj = new RegExp();
Object.defineProperty(obj, "property", regObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");