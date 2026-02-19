var obj = {};
Array.prototype.configurable = true;
var arrObj = [1, 2, 3];
Object.defineProperty(obj, "property", arrObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");