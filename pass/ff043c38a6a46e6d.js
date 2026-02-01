var obj = {};
var getFunc = function () {
  return 1001;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: undefined,
  enumerable: true,
  configurable: true
});
var result1 = obj.prop === 1001;
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  get: undefined
});
var result2 = typeof obj.prop === "undefined";
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");