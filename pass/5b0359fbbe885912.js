var obj = {};
var props = new Number(-9);
Object.defineProperty(props, "prop", {
  value: {
    value: 12
  },
  enumerable: true
});
Object.defineProperties(obj, props);