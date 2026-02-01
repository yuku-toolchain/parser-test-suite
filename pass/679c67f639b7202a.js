var arrObj = [];
var setFunc = function (value) {
  arrObj.setVerifyHelpProp = value;
};
Object.defineProperty(arrObj, "0", {
  set: setFunc,
  enumerable: true,
  configurable: true
});