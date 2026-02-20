var obj = {};
var props = function () {};
Object.defineProperty(props, "prop", {
  value: {
    value: 7
  },
  enumerable: true
});
Object.defineProperties(obj, props);