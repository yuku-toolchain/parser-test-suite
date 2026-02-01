var obj = (function () {
  return arguments;
})();
var verifySetFunc = "data";
var getFunc = function () {
  return verifySetFunc;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  enumerable: true,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");