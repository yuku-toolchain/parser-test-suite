var obj = {};
function setFunc1() {}
Object.defineProperty(obj, "foo", {
  set: setFunc1,
  configurable: true
});
function setFunc2(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: setFunc2
});