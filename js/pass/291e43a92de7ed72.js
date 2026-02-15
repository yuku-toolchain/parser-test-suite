var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    configurable: false
  }
});