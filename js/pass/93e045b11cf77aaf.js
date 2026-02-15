var obj = {};
this.configurable = true;
Object.defineProperty(obj, "property", this);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");