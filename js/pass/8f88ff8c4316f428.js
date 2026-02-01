var obj = {};
Object.defineProperty(obj, "foo", {
  value: 20,
  writable: true,
  configurable: false
});
Object.preventExtensions(obj);