var obj = {};
Object.defineProperty(obj, "foo", {
  value: 100,
  writable: true,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    value: 200,
    writable: false,
    configurable: false
  }
});