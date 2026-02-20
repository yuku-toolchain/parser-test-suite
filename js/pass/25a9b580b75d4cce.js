var obj = {};
function get_Func() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: get_Func
});
Object.defineProperties(obj, {
  foo: {
    get: get_Func
  }
});