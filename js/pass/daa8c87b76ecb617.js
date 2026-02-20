var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: false,
  enumerable: true,
  configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
function getFunc() {
  return 20;
}
Object.defineProperty(obj, "prop", {
  get: getFunc
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");