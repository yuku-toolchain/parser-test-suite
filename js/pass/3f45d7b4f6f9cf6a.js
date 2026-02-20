var obj = {};
function get_Func1() {
  return 10;
}
Object.defineProperty(obj, "foo", {
  get: get_Func1,
  configurable: true
});
function get_Func2() {
  return 20;
}
Object.defineProperties(obj, {
  foo: {
    get: get_Func2
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "foo");