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
  enumerable: true,
  configurable: true
});
Object.defineProperty(obj, "foo", {
  set: undefined,
  get: getFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "foo");