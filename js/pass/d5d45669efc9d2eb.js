var accessed = false;
function callbackfn(val, idx, obj) {
  if (idx > 0) {
    accessed = true;
  }
  if (idx === 0) {
    throw new Error("Exception occurred in callbackfn");
  }
}
var obj = {
  0: 11,
  4: 10,
  10: 8,
  length: 20
};