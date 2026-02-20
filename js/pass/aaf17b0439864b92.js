var obj = {};
var numObj = new Number(-2);
numObj.writable = true;
Object.defineProperty(obj, "property", numObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";