var obj = {};
var attr = {
  configurable: new SyntaxError()
};
Object.defineProperty(obj, "property", attr);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");