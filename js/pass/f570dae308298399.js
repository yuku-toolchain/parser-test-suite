var obj = {};
RegExp.prototype.writable = true;
var regObj = new RegExp();
Object.defineProperty(obj, "property", regObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";