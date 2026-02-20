var obj = {};
Object.defineProperty(obj, "property", {
  writable: this
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";