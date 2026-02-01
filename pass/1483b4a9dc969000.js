Object.defineProperty(Array.prototype, "0", {
  value: 100,
  writable: false,
  configurable: true
});
var newArrayFromConcat = Array.prototype.concat.call(101);