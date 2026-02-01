var obj = {};
Object.defineProperty(obj, "foo", {
  value: 1001,
  writable: true,
  enumerable: false,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  enumerable: true
});