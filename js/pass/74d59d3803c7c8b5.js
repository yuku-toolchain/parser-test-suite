var obj = {};
var setFunc = function (value) {
  obj.setVerifyHelpProp = value;
};
Object.defineProperty(obj, "property", {
  set: setFunc,
  enumerable: true,
  configurable: true
});