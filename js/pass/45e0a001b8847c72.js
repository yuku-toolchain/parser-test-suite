function callbackfn(val, idx, obj) {
  return this === Math;
}
var testResult = [11].map(callbackfn, Math);