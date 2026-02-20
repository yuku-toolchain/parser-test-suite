var obj = {};
var dateObj = new Date(0);
dateObj.writable = true;
Object.defineProperty(obj, "property", dateObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";