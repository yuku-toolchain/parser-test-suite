(function (a, b, c) {
  delete arguments[0];
  Object.defineProperty(arguments, "0", {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true
  });
  if (a !== 0) {}
})(0, 1, 2);