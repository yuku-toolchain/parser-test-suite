var obj = {};
var getFun = function () {
  return 10;
};
var setFun = function (value) {
  obj.setVerifyHelpProp = value;
};
Object.defineProperties(obj, {
  prop: {
    set: setFun,
    get: getFun,
    enumerable: true
  }
});