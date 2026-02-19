function callbackfn(val, idx, obj) {
  return obj instanceof String;
}
var obj = new String("abc");
var testResult = Array.prototype.map.call(obj, callbackfn);