var obj = {};
var strObj = new String("abc");
strObj.configurable = true;
Object.defineProperty(obj, "property", strObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");