var obj = {};
function get_func() {
  return 10;
}
var set_funcCalled = false;
function set_func() {
  set_funcCalled = true;
}
Object.defineProperty(obj, "foo", {
  get: get_func,
  set: set_func,
  enumerable: true,
  configurable: true
});
Object.freeze(obj);
obj.foo = 12;