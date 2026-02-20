var accessed = false;
function callbackfn(val, idx, obj) {
  if (idx > 0) {
    accessed = true;
  }
  if (idx === 0) {
    throw new Error("Exception occurred in callbackfn");
  }
  return false;
}
var obj = {
  0: 9,
  1: 100,
  10: 11,
  length: 20
};