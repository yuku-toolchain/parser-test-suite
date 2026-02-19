var arr = [];
function get_func() {
  return 11;
}
function set_func(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "0", {
  get: get_func,
  set: set_func,
  enumerable: true,
  configurable: true
});
Object.defineProperties(arr, {
  "0": {}
});