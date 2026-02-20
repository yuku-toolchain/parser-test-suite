var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: false
});
Object.freeze(obj);