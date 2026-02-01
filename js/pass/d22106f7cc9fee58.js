var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
}
var obj = {
  0: 9,
  length: 0
};