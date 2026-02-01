var obj = {};
Error.prototype.writable = true;
var errObj = new Error();
Object.defineProperty(obj, "property", errObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";