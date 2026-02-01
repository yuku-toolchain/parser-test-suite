function callbackfn(val, idx, obj) {
  return parseInt(val, 10) > 1;
}
var str = new String("432");
String.prototype[3] = "1";
var testResult = Array.prototype.map.call(str, callbackfn);