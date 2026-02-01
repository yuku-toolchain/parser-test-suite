(function () {
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
      enumerable: false
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})();