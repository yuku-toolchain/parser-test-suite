var obj = {};
Object.defineProperty(obj, "property", {
  configurable: function () {}
});
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");