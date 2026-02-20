(function (a, b, c) {
  Object.defineProperty(arguments, "0", {
    value: 20,
    writable: false,
    enumerable: false,
    configurable: false
  });
  if (a !== 20) {}
})(0, 1, 2);