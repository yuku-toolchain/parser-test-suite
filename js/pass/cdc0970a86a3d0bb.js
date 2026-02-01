var obj = {};
Object.defineProperty(obj, "foo", {
  value: "abcd",
  writable: false,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    value: "abcd"
  }
});