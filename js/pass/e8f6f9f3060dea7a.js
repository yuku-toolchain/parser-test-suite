var arr = [];
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "property", {
  set: set_fun,
  configurable: false
});
try {
  Object.defineProperties(arr, {
    "property": {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}