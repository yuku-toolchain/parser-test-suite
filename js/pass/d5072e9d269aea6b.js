Object.defineProperty(Object.prototype, "callee", {
  value: 1,
  writable: false,
  configurable: true
});
var argObj = (function () {
  return arguments;
})();