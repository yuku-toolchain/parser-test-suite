var arrObj = [];
function getFunc() {
  return 3;
}
Object.defineProperty(arrObj, "1", {
  get: getFunc,
  configurable: true
});
arrObj[1] = 4;