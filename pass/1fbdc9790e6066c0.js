function callbackfn(prevVal, curVal, idx, obj) {
  return '[object Arguments]' === Object.prototype.toString.call(obj);
}
var obj = (function () {
  return arguments;
})("a", "b");