var obj = {};
Object.defineProperty(obj, "property", {
  writable: new SyntaxError()
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";