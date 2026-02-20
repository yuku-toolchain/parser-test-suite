var arr = [];
function get_fun() {
  return 37;
}
function set_fun(value) {
  arr.verifySetFun = value;
}
Object.defineProperty(arr, "property", {
  get: get_fun,
  set: set_fun
});
try {
  Object.defineProperties(arr, {
    "property": {
      get: function () {
        return 36;
      }
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}