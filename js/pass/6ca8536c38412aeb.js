var obj = {};
Object.defineProperty(obj, "foo", {
  value: 12,
  writable: true,
  configurable: false
});
Object.preventExtensions(obj);