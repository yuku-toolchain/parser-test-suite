function callbackfn(val, idx, obj) {
  return val > 10;
}
var testResult = [12, 11].map(callbackfn);