var arrObj = [];
function getFunc() {
  return 3;
}
Object.defineProperty(arrObj, "1", {
  get: getFunc,
  configurable: true
});
Object.defineProperty(arrObj, "1", {
  value: 12
});