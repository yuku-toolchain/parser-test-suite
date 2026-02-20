var accessed = false;
var fun = function (a, b) {
  return a + b;
};
fun[0] = 12;
fun[1] = 11;
fun[2] = 9;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}