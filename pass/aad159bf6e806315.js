(function (a, b, c) {
  delete arguments[0];
  function getFunc() {
    return 10;
  }
  function setFunc(value) {
    this.setVerifyHelpProp = value;
  }
  Object.defineProperty(arguments, "0", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
  });
  if (a !== 0) {}
})(0, 1, 2);