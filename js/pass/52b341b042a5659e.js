var obj = {};
function set_func1() {}
Object.defineProperty(obj, "foo", {
  set: set_func1,
  configurable: true
});
function set_func2(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperties(obj, {
  foo: {
    set: set_func2
  }
});