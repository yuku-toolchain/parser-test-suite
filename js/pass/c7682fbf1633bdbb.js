var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  if (idx === 0) {
    return val === 11;
  }
  if (idx === 1) {
    return val === 12;
  }
}
var obj = {
  0: 11,
  1: 12,
  length: 2
};