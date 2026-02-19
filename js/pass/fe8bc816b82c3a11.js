var obj = {};
function setFunc1() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  set: setFunc1,
  enumerable: true,
  configurable: true
});
function setFunc2(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: setFunc2
});