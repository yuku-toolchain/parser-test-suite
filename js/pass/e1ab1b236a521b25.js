var accessed = false;
function callbackfn(preVal, curVal, idx, obj) {
  accessed = true;
}
var obj = {
  0: 9,
  length: false
};