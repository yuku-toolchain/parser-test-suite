var obj = {};
Object.defineProperty(obj, "property", {
  writable: new Boolean(false)
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";