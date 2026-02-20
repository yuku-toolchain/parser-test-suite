function callbackfn(val, idx, obj) {
  return '[object Arguments]' === Object.prototype.toString.call(obj);
}
var obj = (function () {
  return arguments;
})("a", "b");
var newArr = Array.prototype.filter.call(obj, callbackfn);