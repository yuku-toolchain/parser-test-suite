(function () {
  Object.defineProperty(arguments, "0", {
    value: 10,
    writable: false,
    enumerable: false,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "0", {
      writable: true
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})(0, 1, 2);