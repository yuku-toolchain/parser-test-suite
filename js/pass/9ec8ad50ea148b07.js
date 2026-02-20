var obj = {};
Array.prototype.writable = true;
var arrObj = [1, 2, 3];
Object.defineProperty(obj, "property", arrObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";