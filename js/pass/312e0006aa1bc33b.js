function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === 13;
  }
  return false;
}
Array.prototype[1] = 13;
var newArr = [].map(callbackfn);