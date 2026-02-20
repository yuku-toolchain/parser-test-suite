var arrObj = [];
var getFunc = function () {};
Object.defineProperty(arrObj, "0", {
  get: getFunc,
  enumerable: true,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(arrObj, "0");