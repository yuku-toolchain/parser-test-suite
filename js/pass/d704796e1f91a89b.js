var obj = {};
Object.defineProperty(obj, "property", {
  writable: Math
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";