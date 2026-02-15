function callbackfn(val, idx, obj) {
  return obj instanceof String;
}
var testResult = Array.prototype.map.call("abc", callbackfn);