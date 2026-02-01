(function () {
  Object.defineProperty(arguments, "0", {
    value: 0,
    writable: false,
    enumerable: true,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "0", {
      enumerable: false
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})();