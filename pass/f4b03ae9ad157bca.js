var obj = {};
var props = [];
var descObj = {
  value: 8
};
Object.defineProperty(props, "prop", {
  value: descObj,
  enumerable: true
});
Object.defineProperties(obj, props);