var obj = {};
Object.prototype.writable = true;
Object.defineProperty(obj, "property", JSON);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";