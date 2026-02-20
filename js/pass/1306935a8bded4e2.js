var obj = {};
function getFunc() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  set: undefined,
  get: getFunc,
  enumerable: true,
  configurable: true
});
function setFunc(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: setFunc
});