function callbackfn1(val, idx, obj) {
  return parseInt(val, 10) > 1;
}
function callbackfn2(val, idx, obj) {
  return parseInt(val, 10) > 2;
}
var str = new String("432");
String.prototype[3] = "1";