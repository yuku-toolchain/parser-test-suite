var arr = [];
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "property", {
  set: set_fun,
  enumerable: false
});
try {
  Object.defineProperties(arr, {
    "property": {
      enumerable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}