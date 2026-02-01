var obj = {};
Object.defineProperty(obj, "foo", {
  value: 200,
  enumerable: true,
  writable: true,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    configurable: false
  }
});