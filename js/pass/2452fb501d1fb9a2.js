var obj = {};
function setFunc(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: setFunc,
  configurable: false
});
function getFunc() {
  return 10;
}
try {
  Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}