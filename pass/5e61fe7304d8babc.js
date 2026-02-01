var obj = {};
Object.defineProperty(obj, "foo", {
  value: 20,
  writable: false,
  configurable: true
});
Object.preventExtensions(obj);