var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "1", {
  set: setFunc,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "1", {
    value: 13
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}