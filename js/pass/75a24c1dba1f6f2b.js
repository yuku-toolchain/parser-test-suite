var arr = [];
function set_func(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "0", {
  set: set_func
});
Object.defineProperties(arr, {
  "0": {
    set: set_func
  }
});