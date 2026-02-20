var obj = {};
Object.defineProperty(obj, "foo", {
  configurable: true
});
Object.defineProperty(obj, "foo", {
  configurable: false
});