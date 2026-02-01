var obj = {};
var set_func = function (value) {
  obj.setVerifyHelpProp = value;
};
Object.defineProperty(obj, "foo", {
  set: set_func,
  configurable: false
});
set_func = function (value) {
  obj.setVerifyHelpProp1 = value;
};
try {
  Object.defineProperties(obj, {
    foo: {
      set: set_func
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}