var called = 0;
var obj = {
  0: 11,
  1: 12,
  length: 2
};
function callbackfn(val, idx, o) {
  called++;
  return obj === o;
}