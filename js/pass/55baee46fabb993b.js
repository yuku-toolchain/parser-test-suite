var obj = {};
var setFun = function (value) {
  obj.setVerifyHelpProp = value;
};
Object.defineProperties(obj, {
  prop: {
    set: setFun,
    enumerable: true,
    configurable: true
  }
});