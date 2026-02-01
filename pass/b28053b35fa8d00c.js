(function (a, b, c) {
  Object.defineProperty(arguments, "genericProperty", {
    enumerable: true,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "genericProperty", {
      enumerable: false
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);