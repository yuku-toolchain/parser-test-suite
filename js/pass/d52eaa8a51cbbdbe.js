var obj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "0", {
  value: 1001,
  writable: true,
  configurable: false
});
Object.defineProperty(obj, "0", {
  value: 1002
});