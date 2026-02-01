var obj = {};
obj.variableForHelpVerify = "data";
Object.defineProperty(obj, "foo1", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: false
});
function set_func(value) {
  obj.variableForHelpVerify = value;
}
function get_func() {
  return 10;
}
Object.defineProperty(obj, "foo2", {
  get: get_func,
  set: set_func,
  enumerable: true,
  configurable: false
});
if (!Object.isExtensible(obj)) {}
Object.seal(obj);
if (Object.isExtensible(obj)) {}