function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 11;
  }
  if (idx === 1) {
    return val === 12;
  }
  return false;
}
var obj = {
  0: 11,
  1: 12,
  length: 2
};
var newArr = Array.prototype.filter.call(obj, callbackfn);