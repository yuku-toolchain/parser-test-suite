var arr = [];
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "property", {
  set: set_fun
});
try {
  Object.defineProperties(arr, {
    "property": {
      set: function () {}
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}