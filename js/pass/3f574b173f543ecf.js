var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return null;
}
var obj = {
  0: 11,
  length: 2
};