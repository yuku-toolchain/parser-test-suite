var obj = {};
var getFunc = function () {
  return 1001;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: undefined,
  enumerable: true,
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");