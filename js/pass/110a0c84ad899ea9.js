var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "0", {
  set: setFunc,
  enumerable: true,
  configurable: true
});
Object.defineProperty(arrObj, "0", {
  enumerable: false
});