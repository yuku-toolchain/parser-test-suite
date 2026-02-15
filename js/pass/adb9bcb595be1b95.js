(function (a, b, c) {
  Object.defineProperty(arguments, "0", {
    value: 10,
    writable: false,
    enumerable: false,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "0", {
      configurable: true
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
    if (a !== 10) {}
  }
})(0, 1, 2);