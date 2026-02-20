function callbackfn(val, idx, obj) {
  return this === eval;
}
var testResult = [11].map(callbackfn, eval);