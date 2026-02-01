(function () {
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
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);