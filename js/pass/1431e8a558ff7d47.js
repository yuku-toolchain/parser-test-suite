var obj = {};
function getFunc() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: getFunc,
  enumerable: true,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  get: getFunc,
  enumerable: false
});