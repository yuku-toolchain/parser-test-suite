function callbackfn(val, idx, obj) {
  return val > 10;
}
var testResult = [11, 9].map(callbackfn);