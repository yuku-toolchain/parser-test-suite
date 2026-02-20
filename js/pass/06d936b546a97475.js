var kValue = {};
function callbackfn(val, idx, obj) {
  if (0 === idx) {
    return kValue === val;
  }
  return false;
}
Array.prototype[0] = kValue;