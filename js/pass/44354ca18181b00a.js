var obj = {};
var getFun = function () {
  return 10;
};
var setFun = function (value) {
  obj.setVerifyHelpProp = value;
};
Object.defineProperties(obj, {
  prop: {
    get: getFun,
    set: setFun,
    enumerable: false,
    configurable: false
  }
});