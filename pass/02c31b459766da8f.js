var obj = {
  0: 11,
  1: 12
};
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return curVal > 10;
}