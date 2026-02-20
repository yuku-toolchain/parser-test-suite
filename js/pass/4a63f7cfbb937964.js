var obj = {};
Object.defineProperty(obj, "property", {
  writable: new Boolean(true)
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";