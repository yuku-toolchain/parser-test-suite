var obj = [];
Object.defineProperty(obj, "prop", {
  value: 1001,
  writable: true,
  configurable: false
});
Object.defineProperty(obj, "prop", {
  value: 1002
});