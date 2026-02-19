var obj = {};
String.prototype.configurable = true;
var strObj = new String("abc");
Object.defineProperty(obj, "property", strObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");