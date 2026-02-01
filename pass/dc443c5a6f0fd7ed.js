var obj = {};
var attr = {};
Object.defineProperty(attr, "value", {
  set: function () {}
});
Object.defineProperty(obj, "property", attr);