var obj = {};
Object.defineProperty(obj, "foo", {
  value: 100,
  writable: false,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    value: 100
  }
});