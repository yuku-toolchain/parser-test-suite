var obj = {};
function setFunc(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: setFunc
});
Object.defineProperty(obj, "foo", {
  set: setFunc
});