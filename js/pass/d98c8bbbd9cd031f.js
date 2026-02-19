var obj = {};
var getFunc = function () {
  return 10;
};
Object.defineProperties(obj, {
  prop: {
    get: getFunc,
    enumerable: true,
    configurable: true
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");