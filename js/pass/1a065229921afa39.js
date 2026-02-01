var obj = {};
Object.defineProperty(obj, "foo", {
  value: false,
  writable: false,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    value: false
  }
});