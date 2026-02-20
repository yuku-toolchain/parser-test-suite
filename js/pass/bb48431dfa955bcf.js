var kValue = {};
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}
var arr = [kValue];
var newArr = arr.map(callbackfn);