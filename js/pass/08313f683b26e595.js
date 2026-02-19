var obj = [];
var verifySetFunc = "data";
var getFunc = function () {
  return verifySetFunc;
};
Object.defineProperty(obj, "0", {
  get: getFunc,
  enumerable: true,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "0");