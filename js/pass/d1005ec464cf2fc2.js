var obj = {};
obj.variableForHelpVerify = "data";
function setFunc(value) {
  obj.variableForHelpVerify = value;
}
function getFunc() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: getFunc,
  set: setFunc,
  enumerable: true,
  configurable: true
});
var preCheck = Object.isExtensible(obj);
Object.seal(obj);
if (!preCheck) {}