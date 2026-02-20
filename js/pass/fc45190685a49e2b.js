var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === 12;
}
var obj = {
  0: 11,
  length: 1
};