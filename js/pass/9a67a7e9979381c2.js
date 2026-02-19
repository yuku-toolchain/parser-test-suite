var obj = {};
Object.defineProperty(obj, "property", {
  writable: 12345
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";