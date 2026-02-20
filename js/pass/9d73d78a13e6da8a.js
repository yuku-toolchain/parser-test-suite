function callbackfn(val, idx, obj) {
  return val > 10 && obj[idx] === val;
}
var newArr = [11].filter(callbackfn);