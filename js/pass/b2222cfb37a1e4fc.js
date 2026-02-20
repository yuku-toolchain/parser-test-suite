(function () {
  Object.defineProperty(arguments, "0", {
    value: 0,
    writable: false,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "0", {
      value: 10
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})();