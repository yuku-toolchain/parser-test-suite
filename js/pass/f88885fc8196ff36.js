(function () {
  function getFunc() {
    return 0;
  }
  Object.defineProperty(arguments, "0", {
    get: getFunc,
    set: undefined,
    enumerable: false,
    configurable: false
  });
  function setFunc(value) {
    this.setVerifyHelpProp = value;
  }
  try {
    Object.defineProperty(arguments, "0", {
      set: setFunc
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})();