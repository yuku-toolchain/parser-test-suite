var obj = {};
var props = {};
Object.defineProperty(props, "prop1", {
  value: {},
  enumerable: false
});
Object.defineProperty(props, "prop2", {
  get: function () {
    return {};
  },
  enumerable: false
});
Object.defineProperties(obj, props);