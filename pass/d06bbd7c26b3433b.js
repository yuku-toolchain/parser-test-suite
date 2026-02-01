var obj = {};
String.prototype.value = "String";
var strObj = new String("abc");
Object.defineProperty(obj, "property", strObj);