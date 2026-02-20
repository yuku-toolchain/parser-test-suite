var accessed = false;
var objError = new RangeError();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objError;
}