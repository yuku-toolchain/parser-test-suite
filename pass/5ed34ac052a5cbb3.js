var obj = {};
var boolObj = new Boolean(true);
boolObj.value = "Boolean";
Object.defineProperty(obj, "property", boolObj);