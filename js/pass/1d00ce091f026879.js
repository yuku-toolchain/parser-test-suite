var arg;
(function fun(a, b, c) {
  arg = arguments;
})(0, 1, 2);
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
var desc = Object.getOwnPropertyDescriptor(arg, "0");