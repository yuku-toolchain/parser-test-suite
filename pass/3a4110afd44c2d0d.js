var objError = new RangeError();
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objError;
}
var obj = {
  0: 11,
  length: 1
};