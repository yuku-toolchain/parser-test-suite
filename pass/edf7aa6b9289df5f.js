var argObj = (function () {
  return arguments;
})();
Object.defineProperty(argObj, "foo", {
  value: 12,
  configurable: false
});