function callbackfn(val, idx, obj) {
  return this === global;
}
var testResult = [11].map(callbackfn, this);