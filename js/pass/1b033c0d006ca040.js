var arrObj = [];
var setFunc = function (value) {
  arrObj.setVerifyHelpProp = value;
};
var getFunc = function () {
  return 14;
};
Object.defineProperty(arrObj, "0", {
  get: function () {
    return 11;
  },
  set: function () {},
  configurable: true,
  enumerable: true
});
Object.defineProperty(arrObj, "0", {
  get: getFunc,
  set: setFunc,
  configurable: false,
  enumerable: false
});