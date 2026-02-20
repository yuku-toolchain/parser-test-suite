var obj = {};
var regObj = new RegExp();
regObj.writable = true;
Object.defineProperty(obj, "property", regObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";