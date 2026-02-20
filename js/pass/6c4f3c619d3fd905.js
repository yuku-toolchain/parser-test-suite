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
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "0");
try {
  Object.defineProperty(obj, "0", {
    value: 1001
  });
} catch (e) {
  var desc2 = Object.getOwnPropertyDescriptor(obj, "0");
  if (!desc1.hasOwnProperty("get")) {}
  if (desc2.hasOwnProperty("value")) {}
  if (!(e instanceof TypeError)) {}
}