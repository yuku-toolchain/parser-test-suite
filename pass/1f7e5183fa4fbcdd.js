var arg;
(function fun() {
  arg = arguments;
})();
function get_func() {
  return 0;
}
Object.defineProperty(arg, "0", {
  get: get_func,
  set: undefined,
  enumerable: false,
  configurable: false
});
function set_func(value) {
  arg.setVerifyHelpProp = value;
}
try {
  Object.defineProperties(arg, {
    "0": {
      set: set_func
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}