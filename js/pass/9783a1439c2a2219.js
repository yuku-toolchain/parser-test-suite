var arr = [];
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "0", {
  set: set_fun,
  configurable: true
});
Object.defineProperties(arr, {
  "0": {
    configurable: false
  }
});