var obj = {};
var argObj = (function () {
  return arguments;
})();
argObj.writable = true;
Object.defineProperty(obj, "property", argObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";