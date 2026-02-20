var obj = {};
Object.defineProperty(obj, "foo", {
  value: false,
  writable: false,
  configurable: false
});
Object.defineProperty(obj, "foo", {
  value: false
});