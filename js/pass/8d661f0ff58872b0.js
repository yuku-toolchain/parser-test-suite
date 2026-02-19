var obj = {};
var attributes = {};
Object.defineProperty(attributes, "set", {
  set: function () {}
});
Object.defineProperty(obj, "property", attributes);
var desc = Object.getOwnPropertyDescriptor(obj, "property");