var obj = [];
obj.verifySetFunc = "data";
var getFunc = function () {
  return obj.verifySetFunc;
};
var setFunc = function (value) {
  obj.verifySetFunc = value;
};
Object.defineProperty(obj, "0", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "0");
Object.defineProperty(obj, "0", {
  value: 1001
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "0");
if (!desc1.hasOwnProperty("get")) {}
if (!desc2.hasOwnProperty("value")) {}
if (typeof desc2.get !== "undefined") {}
if (typeof desc2.set !== "undefined") {}