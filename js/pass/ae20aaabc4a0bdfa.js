var obj = {};
var setFunc = function (value) {
  obj.setVerifyHelpProp = value;
};
var getFunc = function () {
  return 10;
};
Object.defineProperty(obj, "property", {
  set: setFunc,
  get: getFunc,
  configurable: true
});