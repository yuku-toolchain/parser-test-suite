function callbackfn(val, idx, obj) {
  return this === JSON;
}
var testResult = [11].map(callbackfn, JSON);