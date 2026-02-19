var arr = [];
arr[1] = 3;
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperties(arr, {
  "1": {
    set: set_fun
  }
});