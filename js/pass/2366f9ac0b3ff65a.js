var arrObj = [];
function getFunc() {
  return 11;
}
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "0", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: true
});
Object.defineProperty(arrObj, "0", {});