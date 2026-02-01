function callbackfn(val, idx, obj) {
  return val > 10 && obj[idx] === val;
}
var testResult = [11].map(callbackfn);