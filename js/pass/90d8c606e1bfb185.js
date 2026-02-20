function getFunc() {
  return arrObj.helpVerifySet;
}
function setFunc(value) {
  arrObj.helpVerifySet = value;
}
try {
  Object.defineProperty(Array.prototype, "0", {
    get: function () {
      return 11;
    },
    configurable: true
  });
  var arrObj = [];
  Object.defineProperty(arrObj, "0", {
    get: getFunc,
    set: setFunc,
    configurable: false
  });
  arrObj[0] = 13;
} finally {
  delete Array.prototype[0];
}