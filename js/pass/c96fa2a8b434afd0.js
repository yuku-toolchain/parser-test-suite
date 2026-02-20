var arg = (function () {
  return arguments;
})();
Object.defineProperty(arg, "prop", {
  value: 11,
  configurable: false
});