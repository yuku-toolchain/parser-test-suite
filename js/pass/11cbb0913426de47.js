Object.defineProperty(Object.prototype, "prop2", {
  value: 100,
  writable: false,
  configurable: true
});
var obj = {
  prop1: 101,
  prop2: 12
};