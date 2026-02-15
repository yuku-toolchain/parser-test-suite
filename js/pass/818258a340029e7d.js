var result = false;
var objError = new RangeError();
function callbackfn(val, idx, obj) {
  result = this === objError;
}
[11].forEach(callbackfn, objError);