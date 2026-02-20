var obj = {};
var getFunc = function () {
  return 1001;
};
Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: false,
  configurable: true
});
var result1 = typeof obj.prop === "undefined";
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  get: getFunc
});
var result2 = obj.prop === 1001;
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");