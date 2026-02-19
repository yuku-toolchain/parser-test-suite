function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 11;
  }
}
var newArr = [11].filter(callbackfn);