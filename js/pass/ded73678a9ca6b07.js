var arg;
(function fun() {
  arg = arguments;
})();
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
      enumerable: false
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}