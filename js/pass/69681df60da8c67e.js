var obj = {};
Object.defineProperty(obj, "foo", {
  value: undefined,
  writable: false,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    value: undefined
  }
});