var accessed = false;
var objError = new RangeError();
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objError;
}
var obj = {
  0: 11,
  length: 1
};