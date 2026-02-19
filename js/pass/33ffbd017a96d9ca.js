var arg = (function () {
  return arguments;
})(1, 2, 3);
Object.defineProperty(arg, "genericProperty", {
  value: 1001,
  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperties(arg, {
  "genericProperty": {
    value: 1002,
    enumerable: false,
    configurable: false
  }
});