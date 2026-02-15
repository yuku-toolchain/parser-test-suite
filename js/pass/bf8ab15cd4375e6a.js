Object.defineProperty(Error.prototype, "prop", {
  value: 1001,
  writable: true,
  enumerable: true,
  configurable: true
});
var errObj = new Error();