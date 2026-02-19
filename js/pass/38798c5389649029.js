var arrObj = [];
function getFunc() {
  return 12;
}
Object.defineProperty(arrObj, "0", {
  get: undefined,
  configurable: true
});
Object.defineProperty(arrObj, "0", {
  get: getFunc
});