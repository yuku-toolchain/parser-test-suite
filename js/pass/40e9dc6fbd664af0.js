var obj = {};
Object.defineProperty(obj, "property", {
  get: function () {},
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");