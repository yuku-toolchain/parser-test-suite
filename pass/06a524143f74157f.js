var obj = {};
Object.defineProperty(obj, "foo", {
  value: 200,
  enumerable: false,
  writable: true,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    enumerable: true
  }
});