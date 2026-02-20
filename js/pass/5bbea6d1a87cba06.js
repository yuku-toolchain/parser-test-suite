var obj = {};
Object.prototype.writable = true;
Object.defineProperty(obj, "property", Math);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";