function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var fun = function (a, b) {
  return a + b;
};
fun[0] = 9;
fun[1] = 11;
fun[2] = 12;