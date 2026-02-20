var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}
var obj = {
  0: 11,
  1: 12
};