var obj = {};
function set_func1(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: set_func1,
  configurable: false
});
function set_func2() {}
try {
  Object.defineProperties(obj, {
    foo: {
      set: set_func2
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}