var arrObj = [3];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "0", {
  set: setFunc
});