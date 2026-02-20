var arr = [];
function get_fun() {
  return 36;
}
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "0", {
  get: function () {
    return 12;
  },
  set: set_fun,
  enumerable: true,
  configurable: true
});
Object.defineProperties(arr, {
  "0": {
    get: get_fun,
    enumerable: false,
    configurable: false
  }
});