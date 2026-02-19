var obj = {};
var errObj = new Error();
errObj.configurable = true;
Object.defineProperty(obj, "property", errObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");