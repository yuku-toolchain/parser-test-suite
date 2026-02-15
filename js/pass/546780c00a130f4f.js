(function () {
  Object.defineProperty(arguments, "genericProperty", {
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "genericProperty", {
      configurable: true
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);