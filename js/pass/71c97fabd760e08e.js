var arrObj = [];
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "1", {
  set: setFunc
});
try {
  Object.defineProperty(arrObj, "1", {
    set: function () {}
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}