var obj = {};
var setFunc = function (value) {
  obj.setVerifyHelpProp = value;
};
var getFunc = function () {
  return 14;
};
Object.defineProperty(obj, "property", {
  get: function () {
    return 11;
  },
  set: function (value) {},
  configurable: true,
  enumerable: true
});
Object.defineProperty(obj, "property", {
  get: getFunc,
  set: setFunc,
  configurable: false,
  enumerable: false
});