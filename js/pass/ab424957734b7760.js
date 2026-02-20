function callbackfn(val, idx) {
  return val > 10 && arguments[2][idx] === val;
}
var testResult = [11].map(callbackfn);