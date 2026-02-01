var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    configurable: false
  }
});