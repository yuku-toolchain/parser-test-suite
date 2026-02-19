var obj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "property", {
  value: 1001,
  writable: false,
  configurable: true
});
Object.defineProperty(obj, "property", {
  value: 1002
});