function getFunc() {
  return 20;
}
function setFunc() {}
var newObj = Object.create({}, {
  0: {
    value: 100,
    enumerable: true,
    writable: true,
    configurable: true
  },
  1: {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
  },
  2: {
    value: 200,
    enumerable: true,
    writable: true,
    configurable: true
  }
});