var obj = [];
obj.verifySetFunc = "data";
var getFunc = function () {
  return obj.verifySetFunc;
};
var setFunc = function (value) {
  obj.verifySetFunc = value;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: false
});
obj.prop = "overrideData";
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc = Object.getOwnPropertyDescriptor(obj, "prop");