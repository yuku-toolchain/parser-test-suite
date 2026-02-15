var obj = {};
var props = new Boolean(false);
Object.defineProperty(props, "prop", {
  value: {
    value: 10
  },
  enumerable: true
});
Object.defineProperties(obj, props);