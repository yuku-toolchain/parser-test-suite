var obj = {
  0: 11,
  1: 12,
  length: 2
};
function callbackfn(val, idx, o) {
  if (idx === 0) {
    obj[idx + 1] = 8;
  }
  return val > 10;
}
var newArr = Array.prototype.filter.call(obj, callbackfn);