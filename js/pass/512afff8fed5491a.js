Object.defineProperty(Date.prototype, "prop", {
  value: 1001,
  writable: true,
  enumerable: true,
  configurable: true
});
var dateObj = new Date();
dateObj.prop = 1002;