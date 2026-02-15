var obj = {};
Object.defineProperty(obj, "property", {
  writable: true
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";