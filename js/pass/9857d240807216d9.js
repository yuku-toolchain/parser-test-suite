var obj = {};
function getFunc1() {
  return 10;
}
function setFunc1() {}
Object.defineProperty(obj, "foo", {
  get: getFunc1,
  set: setFunc1,
  enumerable: true,
  configurable: true
});
function getFunc2() {
  return 20;
}
function setFunc2(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  get: getFunc2,
  set: setFunc2,
  enumerable: false
});