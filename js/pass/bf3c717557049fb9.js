var obj = {};
Object.defineProperty(obj, "foo", {
  value: 100,
  enumerable: true,
  writable: false,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    writable: true
  }
});