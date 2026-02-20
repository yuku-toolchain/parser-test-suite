Object.defineProperty(Object.prototype, "prop", {
  value: 100,
  writable: false,
  configurable: true
});
var obj = {
  prop: 12
};