var arr = [];
function get_fun() {
  return 12;
}
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperties(arr, {
  "property": {
    get: get_fun,
    set: set_fun,
    enumerable: true,
    configurable: true
  }
});
if (arr.length !== 0) {}