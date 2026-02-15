var obj = {};
Object.defineProperty(obj, "0", {
  value: 1001,
  writable: false,
  configurable: true
});
Object.defineProperty(obj, "0", {
  value: 1002
});