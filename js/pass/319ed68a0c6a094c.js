var obj = {};
Object.prototype.configurable = true;
var argObj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "property", argObj);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");