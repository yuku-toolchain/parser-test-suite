var obj = {};
Object.defineProperty(obj, "property", {
  writable: JSON
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";