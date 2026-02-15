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
  set: setFunc,
  enumerable: false,
  configurable: false
});
var result1 = obj.prop === 1001;
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
var result2 = obj.prop === 1001;
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");