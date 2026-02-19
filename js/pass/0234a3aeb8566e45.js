Object.defineProperty(Array.prototype, "prop", {
  value: 1001,
  writable: true,
  enumerable: true,
  configurable: true
});
var arrObj = [];
arrObj.prop = 1002;