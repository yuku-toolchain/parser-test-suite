(function () {
  function getFunc() {
    return "getFunctionString";
  }
  function setFunc(value) {
    this.testgetFunction = value;
  }
  Object.defineProperty(arguments, "genericProperty", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
  });
})(1, 2, 3);