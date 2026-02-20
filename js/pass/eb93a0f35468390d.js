var arg = (function () {
  return arguments;
})(1, 2, 3);
function setFun(value) {
  arg.genericPropertyString = value;
}
Object.defineProperty(arg, "genericProperty", {
  set: setFun,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "genericProperty": {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}