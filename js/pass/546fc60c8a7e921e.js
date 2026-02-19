var obj = {};
var attr = {};
Object.defineProperty(attr, "value", {
  get: function () {
    return "ownAccessorProperty";
  }
});
Object.defineProperty(obj, "property", attr);