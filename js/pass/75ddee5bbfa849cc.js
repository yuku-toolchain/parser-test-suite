var obj = {};
var verifySetFunc = "data";
var setFunc = function (value) {
  verifySetFunc = value;
};
Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: false,
  configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
var propertyDefineCorrect = obj.hasOwnProperty("prop");
Object.defineProperty(obj, "prop", {
  set: setFunc
});
obj.prop = "overrideData";
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");