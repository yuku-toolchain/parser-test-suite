function callbackfn(prevVal, curVal, idx, obj) {
  return obj.length === 2;
}
var obj = {
  0: 12,
  1: 11,
  2: 9,
  length: 2
};