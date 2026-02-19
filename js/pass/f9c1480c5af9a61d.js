var obj = {};
Object.prototype.writable = true;
var argObj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "property", argObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";