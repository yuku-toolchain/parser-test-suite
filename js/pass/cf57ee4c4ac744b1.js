var newObj = {};
function getFunc() {
  return 10;
}
function setFunc(value) {
  newObj.setVerifyHelpProp = value;
}
newObj = Object.create({}, {
  foo1: {
    value: 200,
    enumerable: true,
    writable: true,
    configurable: true
  },
  foo2: {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
  }
});