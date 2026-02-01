var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
  set: setFunc,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "property", {
    configurable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}