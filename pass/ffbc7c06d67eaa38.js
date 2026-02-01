var arrObj = [];
var getFunc = function () {
  return "100";
};
var setFunc = function (value) {
  arrObj.setVerifyHelpProp = value;
};
var desc = {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: true
};
Object.defineProperty(arrObj, "0", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: true
});
Object.defineProperty(arrObj, "0", desc);