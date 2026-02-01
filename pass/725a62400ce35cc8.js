function callbackfn(val, idx) {
  return val > 10 && arguments[2][idx] === val;
}
var newArr = [11].filter(callbackfn);