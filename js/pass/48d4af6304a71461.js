var obj = {};
var props = {};
Object.defineProperty(props, "prop", {
  get: function () {
    return {};
  },
  enumerable: true
});
Object.defineProperties(obj, props);