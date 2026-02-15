var obj = {};
function getFunc() {
  return 10;
}
function setFunc(value) {
  obj.verifyGetHelpMethod = value;
}
Object.defineProperty(obj, "foo", {
  get: getFunc,
  set: setFunc,
  configurable: false
});
Object.defineProperty(obj, "foo", {
  get: getFunc
});