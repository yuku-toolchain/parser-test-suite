var arg;
(function fun(a, b, c) {
  arg = arguments;
})(0, 1, 2);
function get_func() {
  return 0;
}
Object.defineProperty(arg, "0", {
  get: get_func,
  enumerable: true,
  configurable: false
});
try {
  Object.defineProperties(arg, {
    "0": {
      configurable: true
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}