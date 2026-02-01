var obj = {};
function getFunc() {
  return 10;
}
function setFunc(value) {
  obj.helpVerifySet = value;
}
Object.defineProperty(obj, "foo", {
  get: getFunc,
  set: setFunc
});
Object.defineProperty(obj, "foo", {
  get: getFunc
});