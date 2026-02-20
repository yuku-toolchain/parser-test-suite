var obj = {};
Object.defineProperty(obj, "foo", {
  value: 1001,
  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  configurable: false
});