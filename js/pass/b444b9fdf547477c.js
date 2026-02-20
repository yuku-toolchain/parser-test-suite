var obj = {};
Object.defineProperty(obj, "0", {
  value: 1001,
  writable: true,
  enumerable: false,
  configurable: true
});
Object.defineProperty(obj, "0", {
  enumerable: true
});