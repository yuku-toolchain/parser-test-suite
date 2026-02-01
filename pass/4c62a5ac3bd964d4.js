(function () {
  function getFunc() {}
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
    if (!(e instanceof TypeError)) {}
  }
})();