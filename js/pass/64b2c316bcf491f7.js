var obj = [];
Object.defineProperty(obj, "prop", {
  value: 1001,
  writable: false,
  configurable: true
});
Object.defineProperty(obj, "prop", {
  value: 1002
});