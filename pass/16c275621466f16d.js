var obj = {};
Object.defineProperty(obj, "property", {
  writable: new Date(0)
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";