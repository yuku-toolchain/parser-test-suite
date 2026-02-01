var obj = {};
Object.defineProperty(obj, "foo", {
  value: null,
  writable: false,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    value: null
  }
});