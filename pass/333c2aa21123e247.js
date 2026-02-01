var arr = [];
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "1", {
  set: set_fun
});
try {
  Object.defineProperties(arr, {
    "1": {
      set: function () {}
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}