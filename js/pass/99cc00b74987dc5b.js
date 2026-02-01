var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  enumerable: false,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    enumerable: true
  }
});