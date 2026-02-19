function callbackfn(val, idx, obj) {
  if (val === 11) {
    return idx === 0;
  }
  if (val === 12) {
    return idx === 1;
  }
  return false;
}
var obj = {
  0: 11,
  1: 12,
  length: 2
};
var testResult = Array.prototype.map.call(obj, callbackfn);