var obj = {};
var attr = {};
Object.defineProperty(attr, "configurable", {
  get: function () {
    return true;
  }
});
Object.defineProperty(obj, "property", attr);
var beforeDeleted = obj.hasOwnProperty("property");
delete obj.property;
var afterDeleted = obj.hasOwnProperty("property");