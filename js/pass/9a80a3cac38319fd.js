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
try {
  Object.defineProperty(obj, "prop", {
    configurable: true
  });
} catch (e) {}