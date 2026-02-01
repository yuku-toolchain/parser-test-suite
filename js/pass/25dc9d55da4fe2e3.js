(function (a, b, c) {
  function setFunc(value) {
    this.genericPropertyString = value;
  }
  Object.defineProperty(arguments, "genericProperty", {
    set: setFunc,
    enumerable: true,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "genericProperty", {
      enumerable: false
    });
  } catch (e) {
    if (c !== 3) {}
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);