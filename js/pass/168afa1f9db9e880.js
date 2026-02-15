var obj = {};
Date.prototype.configurable = true;
var dateObj = new Date();
Object.defineProperty(obj, "property", dateObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");