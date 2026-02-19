var obj = {};
Object.defineProperty(obj, "property", {
  writable: new String("bbq")
});
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";