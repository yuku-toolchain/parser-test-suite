(function (a, b, c) {
  Object.defineProperty(arguments, "genericProperty", {
    value: 1001,
    writable: true,
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(arguments, "genericProperty", {
    value: 1002,
    enumerable: false,
    configurable: false
  });
})(1, 2, 3);