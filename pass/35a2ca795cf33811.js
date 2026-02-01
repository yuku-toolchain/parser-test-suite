(function (a, b, c) {
  function getFunc() {
    return 0;
  }
  Object.defineProperty(arguments, "0", {
    get: getFunc,
    enumerable: true,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "0", {
      configurable: true
    });
  } catch (e) {
    if (a !== 0) {}
    if (!(e instanceof TypeError)) {}
  }
})(0, 1, 2);