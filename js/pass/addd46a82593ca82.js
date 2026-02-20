(function () {
  function getFunc() {
    return "genericPropertyString";
  }
  function setFunc(value) {
    this.helpVerifyGet = value;
  }
  Object.defineProperty(arguments, "genericProperty", {
    get: getFunc,
    set: setFunc,
    configurable: false
  });
  try {
    Object.defineProperty(arguments, "genericProperty", {
      get: function () {
        return "overideGenericPropertyString";
      }
    });
  } catch (e) {
    if (!(e instanceof TypeError)) {}
  }
})(1, 2, 3);