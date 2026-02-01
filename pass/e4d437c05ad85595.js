var arr = [];
function set_fun(value) {
  arr.setVerifyHelpProp = value;
}
Object.defineProperty(arr, "1", {
  set: set_fun,
  configurable: false
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: 13
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}