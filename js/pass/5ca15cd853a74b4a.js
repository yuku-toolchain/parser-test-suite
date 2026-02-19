var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}
var obj = {
  0: 12,
  length: 4294967296
};