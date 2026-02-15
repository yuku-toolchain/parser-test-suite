var obj = {};
var attributes = {};
Object.defineProperty(attributes, "get", {
  set: function () {}
});
Object.defineProperty(obj, "property", attributes);