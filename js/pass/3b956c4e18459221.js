var obj = {};
function set_func(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  get: undefined,
  set: set_func,
  enumerable: false,
  configurable: false
});
function get_func() {
  return 0;
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