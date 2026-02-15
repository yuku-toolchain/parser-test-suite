function callbackfn(prevVal, curVal, idx, obj) {
  return curVal === 11 && idx === 0;
}
var obj = {
  0: 11,
  1: 9,
  length: true
};