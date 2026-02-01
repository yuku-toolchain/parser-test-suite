var arg;
(function fun(a, b, c) {
  arg = arguments;
})(0, 1, 2);
function get_func1() {
  return 0;
}
Object.defineProperty(arg, "0", {
  get: get_func1,
  enumerable: false,
  configurable: false
});
function get_func2() {
  return 10;
}
var desc = Object.getOwnPropertyDescriptor(arg, "0");