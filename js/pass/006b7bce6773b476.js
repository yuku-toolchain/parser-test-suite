var obj = {};
var props = new String();
Object.defineProperty(props, "prop", {
  value: {
    value: 9
  },
  enumerable: true
});
Object.defineProperties(obj, props);