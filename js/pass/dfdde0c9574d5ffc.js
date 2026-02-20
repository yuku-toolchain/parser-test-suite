var obj = {};
var verifySetFunc = "data";
var setFunc = function (value) {
  verifySetFunc = value;
};
Object.defineProperty(obj, "prop", {
  get: undefined,
  set: setFunc,
  enumerable: true,
  configurable: false
});