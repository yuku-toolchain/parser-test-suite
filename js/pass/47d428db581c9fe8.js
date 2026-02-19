function callbackfn(prevVal, curVal, idx, obj) {
  return obj.length === 2;
}
var fun = function (a, b) {
  return a + b;
};
fun[0] = 12;
fun[1] = 11;
fun[2] = 9;