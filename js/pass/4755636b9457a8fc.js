var arrObj = [];
function getFunc() {
  return 12;
}
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: true
});