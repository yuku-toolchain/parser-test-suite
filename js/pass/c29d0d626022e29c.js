var desc = Object.getOwnPropertyDescriptor(Object.prototype, "constructor");
var getFunc = function () {
  return 100;
};
var data = "data";
var setFunc = function (value) {
  data = value;
};
Object.defineProperty(Object.prototype, "constructor", {
  get: getFunc,
  set: setFunc,
  configurable: true
});
var fun = function () {};