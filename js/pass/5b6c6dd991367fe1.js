var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
  set: setFunc
});
try {
  Object.defineProperty(arrObj, "property", {
    set: function () {}
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}