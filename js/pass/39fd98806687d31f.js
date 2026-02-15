var accessed = false;
var obj = {
  0: 11,
  length: 1
};
function callbackfn(val, idx, obj) {
  accessed = true;
  return null;
}