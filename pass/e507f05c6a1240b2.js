var obj = {};
function get_func() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: get_func,
  configurable: true
});
Object.defineProperties(obj, {
  foo: {
    value: 12
  }
});