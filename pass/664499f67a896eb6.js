var arrObj = [];
function getFunc() {
  return 12;
}
function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
  get: getFunc,
  set: setFunc
});
try {
  Object.defineProperty(arrObj, "property", {
    get: function () {
      return 36;
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}