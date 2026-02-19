var objError = new RangeError();
function callbackfn(val, idx, obj) {
  return this === objError;
}
var testResult = [11].map(callbackfn, objError);