var objError = new RangeError();
function callbackfn(val, idx, obj) {
  return this === objError;
}