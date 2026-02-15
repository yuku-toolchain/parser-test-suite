var obj = {};
var props = new RegExp();
Object.defineProperty(props, "prop", {
  value: {
    value: 14
  },
  enumerable: true
});
Object.defineProperties(obj, props);