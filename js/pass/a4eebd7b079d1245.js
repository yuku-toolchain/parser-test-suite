var obj = {};
String.prototype.writable = true;
var strObj = new String("abc");
Object.defineProperty(obj, "property", strObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";