(function () {
  Object.defineProperty(arguments, "genericProperty", {
    value: 1001,
    writable: true,
    enumerable: true,
    configurable: true
  });
})(1, 2, 3);