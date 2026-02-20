var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  configurable: false
});
function get_func() {
  return 11;
}
try {
  Object.defineProperties(obj, {
    foo: {
      get: get_func
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}