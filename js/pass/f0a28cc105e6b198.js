var obj = {};
var resultSetFun = false;
Object.defineProperty(obj, "foo1", {
  value: 10,
  writable: false,
  enumerable: true,
  configurable: true
});
function get_func() {
  return 10;
}
function set_func() {
  resultSetFun = true;
}
Object.defineProperty(obj, "foo2", {
  get: get_func,
  set: set_func,
  enumerable: true,
  configurable: true
});
Object.freeze(obj);
obj.foo2 = 12;
if (!resultSetFun) {}
var desc2 = Object.getOwnPropertyDescriptor(obj, "foo2");
if (desc2.writable) {}