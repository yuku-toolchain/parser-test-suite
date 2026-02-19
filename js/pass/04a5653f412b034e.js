var obj = {};
function set_func(value) {
  obj.setVerifyHelpProp = value;
}
function get_func1() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: get_func1,
  set: set_func,
  enumerable: false,
  configurable: false
});
function get_func2() {
  return 20;
}
try {
  Object.defineProperties(obj, {
    foo: {
      get: get_func2
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}