var obj = {};
var getFunc = function () {
  return 1001;
};
var verifySetFunc = "data";
var setFunc = function (value) {
  verifySetFunc = value;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: undefined,
  enumerable: false,
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");