var obj = {};
var dateObj = new Date(0);
dateObj.configurable = true;
Object.defineProperty(obj, "property", dateObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");