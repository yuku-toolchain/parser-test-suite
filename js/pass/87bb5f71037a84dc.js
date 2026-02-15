var obj = {};
function get_Func() {
  return 0;
}
Object.defineProperty(obj, "foo", {
  set: undefined,
  get: get_Func,
  enumerable: false,
  configurable: false
});
function set_Func() {}
try {
  Object.defineProperties(obj, {
    foo: {
      set: set_Func
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}
var desc = Object.getOwnPropertyDescriptor(obj, "foo");
if (typeof desc.set !== "undefined") {}