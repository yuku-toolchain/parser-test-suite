var obj = {};
Object.defineProperty(obj, "foo", {
  enumerable: false,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  enumerable: true
});