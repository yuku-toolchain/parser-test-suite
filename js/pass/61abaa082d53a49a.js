Object.defineProperty(Array.prototype, "1", {
  value: 100,
  writable: false,
  configurable: true
});
var arr = [101, 12];