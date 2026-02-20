var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "0", {
  set: setFunc
});
Object.defineProperty(arrObj, "0", {
  set: setFunc
});