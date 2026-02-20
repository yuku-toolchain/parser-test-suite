var obj = {};
function getFunc1() {
  return 10;
}
function setFunc1(value) {
  obj.helpVerifySet = value;
}
Object.defineProperty(obj, "foo", {
  get: getFunc1,
  set: setFunc1,
  configurable: true
});
function getFunc2() {
  return 20;
}
Object.defineProperty(obj, "foo", {
  get: getFunc2
});