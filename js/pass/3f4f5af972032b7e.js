var obj = {};
Object.defineProperty(obj, "property", {
  set: function () {},
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");