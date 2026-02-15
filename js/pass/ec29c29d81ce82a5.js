Object.defineProperty(Number.prototype, "prop", {
  value: 1001,
  writable: false,
  enumerable: false,
  configurable: true
});
var numObj = new Number();