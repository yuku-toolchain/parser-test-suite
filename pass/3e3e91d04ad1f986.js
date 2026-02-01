var obj = {};
Function.prototype.writable = true;
var funObj = function (a, b) {
  return a + b;
};
Object.defineProperty(obj, "property", funObj);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";