var obj = {};
var strObj = new String("abc");
strObj.value = "String";
Object.defineProperty(obj, "property", strObj);