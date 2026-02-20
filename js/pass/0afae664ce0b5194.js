var obj = {};
function setFunc(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: setFunc,
  configurable: false
});
Object.defineProperty(obj, "foo", {
  set: setFunc
});