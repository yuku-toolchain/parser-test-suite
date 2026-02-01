(function () {
  function getFunc1() {
    return 0;
  }
  Object.defineProperty(arguments, "0", {
    get: getFunc1,
    enumerable: false,
    configurable: false
  });
  function getFunc2() {
    return 10;
  }
  try {
    Object.defineProperty(arguments, "0", {
      get: getFunc2
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})();