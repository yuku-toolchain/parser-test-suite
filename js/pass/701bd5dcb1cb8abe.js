var obj = {};
Object.defineProperty(obj, "foo1", {
  value: 10,
  writable: false,
  enumerable: true,
  configurable: false
});
Object.defineProperty(obj, "foo2", {
  value: 20,
  writable: true,
  enumerable: false,
  configurable: false
});
Object.freeze(obj);