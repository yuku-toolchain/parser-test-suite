var obj = {};
Object.defineProperty(obj, "property", {
  get: function () {
    return "property";
  },
  enumerable: false,
  configurable: false
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");