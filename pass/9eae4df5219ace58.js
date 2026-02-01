var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return 2;
}
var obj = {
  0: 11,
  length: -0
};