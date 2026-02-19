function callbackfn(val, idx, obj) {
  return '[object Arguments]' !== Object.prototype.toString.call(obj);
}
var obj = (function fun() {
  return arguments;
})("a", "b");