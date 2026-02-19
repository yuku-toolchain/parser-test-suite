var arrObj = [];
function getFunc() {
  return 100;
}
Object.defineProperty(arrObj, "0", {
  get: function () {
    return 12;
  },
  configurable: true
});
Object.defineProperty(arrObj, "0", {
  get: getFunc
});