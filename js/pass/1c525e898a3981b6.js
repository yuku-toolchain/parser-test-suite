var arg = (function () {
  return arguments;
})(1, 2, 3);
function getFun() {
  return "genericPropertyString";
}
function setFun(value) {
  arg.verifySetFun = value;
}
Object.defineProperty(arg, "genericProperty", {
  get: getFun,
  set: setFun,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "genericProperty": {
      get: function () {
        return "overideGenericPropertyString";
      }
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}