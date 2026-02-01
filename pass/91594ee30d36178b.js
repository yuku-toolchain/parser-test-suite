var obj = {};
Boolean.prototype.value = "Boolean";
var boolObj = new Boolean(true);
Object.defineProperty(obj, "property", boolObj);