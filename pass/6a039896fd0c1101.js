var obj = {};
var attr = {
  writable: true
};
Object.defineProperty(obj, "property", attr);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";