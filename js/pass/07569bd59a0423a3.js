var obj = {};
Object.defineProperty(obj, "prop", {
  value: 1003,
  enumerable: true,
  configurable: true
});
var arr = Object.keys(obj);