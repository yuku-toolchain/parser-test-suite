var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
  set: setFunc,
  enumerable: false
});
try {
  Object.defineProperty(arrObj, "property", {
    enumerable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}