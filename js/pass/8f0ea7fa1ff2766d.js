var obj = {};
function get_Func() {
  return 0;
}
Object.defineProperty(obj, "foo", {
  get: get_Func,
  set: undefined,
  enumerable: false,
  configurable: false
});
Object.defineProperties(obj, {
  foo: {
    set: undefined
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "foo");
if (typeof desc.set !== "undefined") {}