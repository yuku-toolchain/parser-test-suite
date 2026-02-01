var obj = {};
function get_Func() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: get_Func,
  configurable: false
});
try {
  Object.defineProperties(obj, {
    foo: {
      value: 11
    }
  });
} catch (e) {
  var desc = Object.getOwnPropertyDescriptor(obj, "foo");
}