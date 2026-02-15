var obj = {};
function getFunc() {
  return 10;
}
function setFunc(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  get: getFunc,
  set: setFunc,
  configurable: true
});
function getFunc2() {
  return 20;
}
Object.defineProperty(obj, "foo", {
  get: getFunc2
});