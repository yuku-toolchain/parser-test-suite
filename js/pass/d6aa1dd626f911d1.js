(function () {
  function setFunc(value) {
    this.genericPropertyString = value;
  }
  Object.defineProperty(arguments, "genericProperty", {
    set: setFunc,
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