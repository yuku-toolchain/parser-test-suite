var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  configurable: true
});
function get_Func() {
  return 20;
}
Object.defineProperties(obj, {
  foo: {
    get: get_Func
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "foo");