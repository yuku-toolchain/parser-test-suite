function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var obj = {
  0: 9,
  10: 11,
  11: 12,
  length: 11.5
};