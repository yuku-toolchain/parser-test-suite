(function (a, b, c) {
  delete arguments[0];
  Object.defineProperty(arguments, "0", {
    value: 10,
    writable: false,
    enumerable: false,
    configurable: false
  });
  if (a !== 0) {}
})(0, 1, 2);