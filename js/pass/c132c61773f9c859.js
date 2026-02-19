(function (a, b, c) {
  Object.defineProperty(arguments, "genericProperty", {
    writable: false,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "genericProperty", {
      writable: true
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);