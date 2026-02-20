var obj = {};
function set_func(value) {
  obj.setVerifyHelpProp = value;
}
Object.defineProperty(obj, "foo", {
  set: set_func
});
Object.defineProperties(obj, {
  foo: {
    set: set_func
  }
});