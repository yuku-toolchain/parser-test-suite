var arg = (function () {
  return arguments;
})(1, 2, 3);
function getFun() {
  return "getFunctionString";
}
function setFun(value) {
  arg.testGetFunction = value;
}
Object.defineProperties(arg, {
  "genericProperty": {
    get: getFun,
    set: setFun,
    enumerable: true,
    configurable: true
  }
});