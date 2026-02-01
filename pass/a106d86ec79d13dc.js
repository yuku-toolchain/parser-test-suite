var accessed = false;
var obj = {
  0: 12,
  1: 11,
  2: 9,
  length: 2
};
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}