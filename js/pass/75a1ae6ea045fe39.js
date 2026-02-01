var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  enumerable: false
});
Object.defineProperties(obj, {
  foo: {
    enumerable: false
  }
});