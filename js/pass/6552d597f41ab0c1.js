(function () {
  Object.defineProperty(arguments, "genericProperty", {
    get: function () {
      return 1001;
    },
    set: function (value) {
      this.testgetFunction1 = value;
    },
    enumerable: true,
    configurable: true
  });
  function getFunc() {
    return "getFunctionString";
  }
  function setFunc(value) {
    this.testgetFunction = value;
  }
  Object.defineProperty(arguments, "genericProperty", {
    get: getFunc,
    set: setFunc,
    enumerable: false,
    configurable: false
  });
})(1, 2, 3);