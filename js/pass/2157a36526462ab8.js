var obj = {};
var props = new Date(0);
Object.defineProperty(props, "prop", {
  value: {
    value: 13
  },
  enumerable: true
});
Object.defineProperties(obj, props);