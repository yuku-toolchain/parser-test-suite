var obj = {};
Object.defineProperty(obj, "foo", {
  writable: false,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  writable: true
});