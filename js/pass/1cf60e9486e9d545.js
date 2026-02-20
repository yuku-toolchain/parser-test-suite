var kValue = {};
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return kValue === val;
  }
  return false;
}