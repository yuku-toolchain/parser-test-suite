function callbackfn(val, idx, obj) {
  return obj instanceof Number;
}
Number.prototype[0] = 1;
Number.prototype.length = 1;
var testResult = Array.prototype.map.call(2.5, callbackfn);