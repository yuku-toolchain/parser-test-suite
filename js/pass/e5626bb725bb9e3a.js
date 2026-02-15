var obj = {};
Object.defineProperty(obj, "foo", {
  value: undefined,
  enumerable: true,
  writable: true,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    value: 200
  }
});