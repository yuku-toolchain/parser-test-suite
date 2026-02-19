(function (a, b, c) {
  Object.defineProperty(arguments, "genericProperty", {
    value: 1001,
    writable: false,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "genericProperty", {
      value: 1002
    });
  } catch (e) {
    if (b !== 2) {}
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);