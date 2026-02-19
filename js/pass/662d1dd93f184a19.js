(function () {
  Object.defineProperty(arguments, "0", {
    value: 0,
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
})();