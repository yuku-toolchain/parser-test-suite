var accessed = false;
var objError = new RangeError();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objError;
}
var newArr = [11].filter(callbackfn, objError);