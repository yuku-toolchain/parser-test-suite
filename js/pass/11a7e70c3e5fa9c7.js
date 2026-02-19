var obj = {};
var attr = {};
Object.defineProperty(attr, "configurable", {
  set: function () {}
});
Object.defineProperty(obj, "property", attr);