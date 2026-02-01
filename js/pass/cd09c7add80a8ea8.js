var obj = {};
var props = {};
Object.defineProperty(props, "prop", {
  get: function () {
    return {};
  },
  enumerable: false
});
Object.defineProperties(obj, props);