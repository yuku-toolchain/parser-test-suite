try {
  var getFunc = function () {
    return 100;
  };
  var data = "data";
  var setFunc = function (value) {
    data = value;
  };
  Object.defineProperty(Function.prototype, "prototype", {
    get: getFunc,
    set: setFunc,
    configurable: true
  });
  var fun = function () {};
} finally {
  delete Function.prototype.prototype;
}