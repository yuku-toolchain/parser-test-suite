var obj = {};
Object.defineProperty(obj, "property", {
  writable: new RegExp()
});
var beforeWrite = obj.hasOwnProperty("property") && typeof obj.property === "undefined";
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";