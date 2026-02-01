var arrObj = [];
arrObj.helpVerifySet = 10;
function getFunc() {
  return arrObj.helpVerifySet;
}
function setFunc(value) {
  arrObj.helpVerifySet = value;
}
Object.defineProperty(arrObj, "0", {
  get: getFunc,
  set: setFunc
});
Object.defineProperty(arrObj, "0", {
  get: getFunc
});