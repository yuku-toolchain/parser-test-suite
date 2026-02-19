var arr = [];
var getFunc = function () {
  return 11;
};
Object.defineProperties(arr, {
  "0": {
    get: getFunc,
    enumerable: true,
    configurable: true
  }
});
var desc = Object.getOwnPropertyDescriptor(arr, "0");