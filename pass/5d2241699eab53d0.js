var obj = (function () {
  return arguments;
})();
Object.defineProperty(obj, "0", {
  value: 2010,
  writable: false,
  enumerable: true,
  configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "0");
function getFunc() {
  return 20;
}
Object.defineProperty(obj, "0", {
  get: getFunc
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "0");