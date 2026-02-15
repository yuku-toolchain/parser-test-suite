function callbackfn(val, idx, obj) {
  return '[object Arguments]' === Object.prototype.toString.call(obj);
}
var obj = (function () {
  return arguments;
})("a", "b");
var testResult = Array.prototype.map.call(obj, callbackfn);