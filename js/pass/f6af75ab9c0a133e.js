function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === 9;
  }
  return false;
}
var newArr = [11, 9].filter(callbackfn);